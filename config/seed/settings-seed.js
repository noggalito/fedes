module.exports = (function () {
  var SettingsSeed = function (options) {
    this.Settings = options.db.qDefine('settings', {
      key: String,
      value: String
    });
  };

  var navigationElements = [
    
  ];

  var defaultSettings = {

  };

  SettingsSeed.prototype.performQueries = function (nextSeed) {
    return Object.keys(defaultSettings).map(function (key) {
      var value = defaultSettings[key];

      return this.Settings.qOne({ key: key }).then(function (setting) {
        setting.value = value;
        return setting.qSave().then(function (res) {
          nextSeed();
        });
      });
    }, this);
  };

  return SettingsSeed;
})();
