module.exports = (function () {
  var async = require('async');
  var uuid  = require('node-uuid');
  var TagsSeed = function (options) {
    this.logger = options.logger;
    this.Tags = options.db.qDefine('tags', {
      id: Number,
      uuid: String,
      name: String,
      slug: String,
      hidden: Number,
      created_at: Date,
      created_by: Number,
      updated_at: Date,
      updated_by: Number
    });
    this.Users = options.db.qDefine('users', {
      id: Number
    });
  };

  var defaultTags = [
    {
      name: 'proyectos',
      slug: 'proyectos',
      hidden: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'carouselImagen',
      slug: 'carouselimagen',
      hidden: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      name: 'servicios',
      slug: 'servicios',
      hidden: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  TagsSeed.prototype.firstUser = function (cb) {
    return this.Users.qOne().then(cb).fail(this.logger.onFatal);
  };

  TagsSeed.prototype.ifNonExistentTag = function (tag,
                                                  existentCb,
                                                  successCb) {
    return this.Tags.qOne({
      slug: tag.slug
    }).then(function (existingTag) {
      if (existingTag) {
        existentCb(tag);
      }
      else {
        successCb(tag);
      }
    });
  };

  TagsSeed.prototype.performQueries = function (nextSeed) {
    var self = this;

    return self.firstUser(function (user) {
      async.eachSeries(defaultTags,
        function createTag(tag, callback) {

          var tagExists = function (tag) {
            self.logger.info('tag exists', tag.name)
            return callback();
          };

          return self.ifNonExistentTag(tag, tagExists, function (tag) {
            tag.uuid = uuid.v4();
            tag.created_by = user.id;
            tag.updated_by = user.id;

            return self.Tags.qCreate(tag)
              .then(function (res) {
                self.logger.success('seeded tag', res.name);
                callback();
              }).fail(callback);
          });
        }, function done(err) {
          if (err) {
            self.logger.onFatal(err);
          } else {
            nextSeed();
          }
        });
    });
  };

  return TagsSeed;
})();
