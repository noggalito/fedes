module.exports = (function () {
  var qOrm = require('q-orm');

  var Connection = function (options) {
    this.nodeEnv = options.nodeEnv;
  };

  Connection.prototype.getUrl = function () {
    if (this.nodeEnv == 'development') {
      return this.getDevelopmentUrl();
    } else {
      return process.env.DATABASE_URL;
    }
  };

  Connection.prototype.getDevelopmentUrl = function () {
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
    var config = require('./../../config');
    return config[this.nodeEnv].database;
  };

  Connection.prototype.connect = function (callback) {
    return qOrm.qConnect(this.getUrl());
  };

  return Connection;
})();
