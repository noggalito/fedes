module.exports = (function () {
  var SettingsSeed = function (db) {
    this.Settings = db.qDefine('settings', {
      key: String,
      value: String
    });
  };

  var defaultSettings = {
    logo: '/default/logo-fedes.png'
  };

  SettingsSeed.prototype.performQueries = function () {
    return Object.keys(defaultSettings).map(function (key) {
      var value = defaultSettings[key];

      return this.Settings.qOne({ key: key }).then(function (setting) {
        setting.value = value;
        return setting.qSave();
      });
    }, this);
  };

  return SettingsSeed;
})();
