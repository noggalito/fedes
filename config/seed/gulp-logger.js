module.exports = (function () {
  var gutil = require('gulp-util');

  var Logger = function () {};

  var colors = {
    'warn': 'yellow',
    'info': 'blue',
    'success': 'green'
  };

  [
    'warn',
    'info',
    'success'
  ].forEach(function (method) {
    Logger.prototype[method] = function (msg, detail) {
      var color = colors[method];
      gutil.log(
        gutil.colors[color](method.toUpperCase()),
        msg,
        gutil.colors.blue(detail)
      );
    };
  });

  Logger.prototype.onFatal = function (error) {
    var pluginError = new gutil.PluginError('seeds', error);
    return gutil.log(pluginError.toString());
  };

  return Logger;
})();
