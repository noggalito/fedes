module.exports = function() {
  var helpers = [
    'moment_date',
    'if_eq'
  ];

  helpers.forEach(function (helper) {
    require('./' + helper)();
  });

};
