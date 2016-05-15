(function () {
  var gutil = require('gulp-util'),
      DbConnection = require('./seed/connection'),
      SettingsSeed = require('./seed/settings-seed');
      PostsSeed = require('./seed/posts-seed');

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

  var seeds = [
    SettingsSeed,
    PostsSeed
  ];

  return database.connect().then(function (db) {
    seeds.forEach(function (seed) {
      performQueries(seed, db);
    });
  }, function (error) {
    var pluginError = new gutil.PluginError('seeds', error);
    return gutil.log(pluginError.toString());
  });

  function performQueries(seed, db) {
    var queries = [seed].map(function (klass) {
      var elem = new klass(db);
      return elem.performQueries();
    });

    return queries.reduce(function (a, b) {
      // flatten array
      return a.concat(b);
    });
  }
})();
