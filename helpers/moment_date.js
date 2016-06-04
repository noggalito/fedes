// # Moment-Date Helper
// Usage: `{{moment-date format="DD MM, YYYY" locale="es"}}`, `{{moment-date updated_at format="DD MM, YYYY" locale="es"}}`

var hbs = require('express-hbs');
var moment = require('moment');

module.exports = function () {
  hbs.registerHelper('moment-date', function (context, options) {

    if (!options && context.hasOwnProperty('hash')) {
      options = context;
      context = undefined;
      if (this.published_at) {
        context = this.published_at;
      }
    }

    context = context === null ? undefined : context;

    var f = options.hash.format || 'MMM Do, YYYY',
      timeago = options.hash.timeago,
      date;
    // change languaje
    if (options.hash.locale) {
      moment.locale(options.hash.locale);
    }
    if (timeago) {
      date = moment(context).fromNow();
    } else {
      date = moment(context).format(f);
    }

    return date;
  });
};
