module.exports = (function () {
  var async = require('async'),
      DbConnection = require('./seed/connection'),
      PostsSeed = require('./seed/posts-seed'),
      SettingsSeed = require('./seed/settings-seed'),
      TagsSeed = require('./seed/tags-seed'),
      DefaultLogger = require('./seed/default-logger');

  // set development environment by default
  var nodeEnv = process.env.NODE_ENV || 'development';

  var Seeds = function (options) {
    this.logger = options['logger'] || new DefaultLogger();
    this.logger.warn('seeding database for', nodeEnv);
  };

  Seeds.prototype.runSeeds = function () {
    var self = this,
        database = new DbConnection({
          nodeEnv: nodeEnv
        });

    return database.connect().then(function (db) {
      var klasses = self.klasses();
      async.eachSeries(klasses,
        function runSeed(klass, nextSeed) {
          var setting = new klass({
            db: db,
            logger: self.logger
          });
          return setting.performQueries(nextSeed);

          /*
            return queries.reduce(function (a, b) {
            // flatten array
            if (a.constructor != Array) {
              a = Array(a);
            }
            return a.concat(b);
          });*/

        },
        function done(err) {
        });

    }, this.logger.onFatal);
  };

  Seeds.prototype.klasses = function () {
    return [
      TagsSeed,
      PostsSeed,
      SettingsSeed
    ];
  };

  return Seeds;
})();
