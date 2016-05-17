module.exports = (function () {
  var Logger = function () {};

  var prefix = '[seeds]';

  [
    'warn',
    'success',
    'info'
  ].forEach(function (method) {
    Logger.prototype[method] = function (msg, detail) {
      console.log(prefix, '[' + method.toUpperCase() + ']:', msg, detail);
    };
  });

  Logger.prototype.onFatal = function (error) {
    console.log(prefix, '[FATAL]:');
    console.error(error);
  };

  return Logger;
})();
