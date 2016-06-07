var hbs = require('express-hbs');
var moment = require('moment');

module.exports = function () {
  hbs.registerHelper('if_eq', function(context, options) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
  });
};
