(function () {
  var gutil = require('gulp-util'),
      DbConnection = require('./seed/connection'),
      SettingsSeed = require('./seed/settings-seed');

  // set development environment by default
  var nodeEnv = process.env.NODE_ENV || 'development';

  gutil.log(
    gutil.colors.yellow('WARNING'),
    'seeding database for',
    gutil.colors.blue(nodeEnv)
  );

  var database = new DbConnection({
    nodeEnv: nodeEnv
  });

  return database.connect().then(function (db) {
    var queries = [ SettingsSeed ].map(function (klass) {
      var setting = new klass(db);
      return setting.performQueries();
    });

    return queries.reduce(function (a, b) {
      // flatten array
      return a.concat(b);
    });
  }, function (error) {
    var pluginError = new gutil.PluginError('seeds', error);
    return gutil.log(pluginError.toString());
  });
})();
