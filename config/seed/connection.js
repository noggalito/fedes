module.exports = (function () {
  var qOrm = require('q-orm');

  var Connection = function () {};

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

  Connection.prototype.connect = function (callback) {
    return qOrm.qConnect(this.getUrl());
  };

  return Connection;
})();
