module.exports = (function () {
  var DbConnection = require('./seed/connection'),
      PostsSeed = require('./seed/posts-seed'),
      SettingsSeed = require('./seed/settings-seed'),
      DefaultLogger = require('./seed/default-logger');

  // set development environment by default
  var nodeEnv = process.env.NODE_ENV || 'development';

  var Seeds = function (options) {
    this.logger = options['logger'] || new DefaultLogger();
    this.logger.warn('seeding database for', nodeEnv);
    return this.runSeeds();
  };

  Seeds.prototype.runSeeds = function () {
    var self = this,
        database = new DbConnection({
      nodeEnv: nodeEnv
    });

    return database.connect().then(function (db) {
      self.klasses().map(function (klass) {
        var setting = new klass({
          db: db,
          logger: self.logger
        });
        return setting.performQueries();
      });

      return queries.reduce(function (a, b) {
        // flatten array
        return a.concat(b);
      });
    }, this.logger.onFatal);
  };

  Seeds.prototype.klasses = function () {
    return [
      PostsSeed,
      SettingsSeed
    ];
  };

  return Seeds;
})();
