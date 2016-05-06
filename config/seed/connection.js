module.exports = (function () {
  var Connection = function () {
    this.url = this.getUrl();
  };

  Connection.prototype.getUrl = function () {
    var db = this.getDBConfig(),
        adapter = db.client,
        connection = db.connection;

    if (adapter == 'sqlite3') {
      adapter = 'sqlite';
      connection = connection.filename;
    }

    return adapter + '://' + connection;
  };

  Connection.prototype.getDBConfig = function () {
    var environment = 'development', // TODO pull from env
        config = require('./../../config');
    return config[environment].database;
  };

  return Connection;
})();
