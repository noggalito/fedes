(function () {
  var DbConnection = require('./seed/connection'),
      SettingsSeed = require('./seed/settings-seed');

  var database = new DbConnection();

  return database.connect().then(function (db) {
    var queries = [ SettingsSeed ].map(function (klass) {
      var setting = new klass(db);
      return setting.performQueries();
    });

    return queries.reduce(function (a, b) {
      // flatten array
      return a.concat(b);
    });
  });
})();
