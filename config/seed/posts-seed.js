module.exports = (function () {
  var async = require('async');
  var uuid  = require('node-uuid');
  var PostsSeed = function (options) {
    this.logger = options.logger;
    this.Posts = options.db.qDefine('posts', {
      id: Number,
      author_id: Number,
      uuid: String,
      title: String,
      slug: String,
      markdown: String,
      html: String,
      featured: Number,
      page: Number,
      status: String,
      language: String,
      updated_by: Number,
      published_by: Number,
      created_by: Number,
      created_at: Date,
      updated_at: Date,
      published_at: Date
    });
    this.Users = options.db.qDefine('users', {
      uuid: String,
      id: Number
    });
  };

  var defaultPosts = [
    {
      title: 'Texto principal',
      slug: 'texto-principal',
      markdown: '<< La innovación es lo que distingue a los ' +
      'líderes de los \nseguidores >>.- Steve Jobs',
      html: '<p>&lt;&lt; La innovación es lo que distingue a los ' +
      'líderes de los <br />seguidores >>.- Steve Jobs</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      created_at: Date.now(),
      updated_at: Date.now(),
      published_at: Date.now()
    }
  ];

  PostsSeed.prototype.firstUser = function (cb) {
    return this.Users.qOne().then(cb).fail(this.logger.onFatal);
  };

  PostsSeed.prototype.ifNonExistentPost = function (post,
                                                    existentCb,
                                                    successCb) {
    // do not override an existing post
    return this.Posts.qOne({
      slug: post.slug
    }).then(function (existingPost) {
      if (existingPost) {
        existentCb(post);
      }
      else {
        successCb(post);
      }
    });
  };

  PostsSeed.prototype.performQueries = function () {
    var self = this;

    return self.firstUser(function (user) {
      async.eachSeries(defaultPosts, function createPost(post, callback) {

        var postExists = function (post) {
          self.logger.info('post exists', post.title)
          return callback();
        };

        return self.ifNonExistentPost(post, postExists, function (post) {
          post.uuid = uuid.v4();
          post.author_id = user.id;
          post.created_by = user.id;
          post.updated_by = user.id;
          post.published_by = user.id;
          return self.Posts.qCreate(post)
            .then(function (res) {
              self.logger.success('seeded post', res.title);
              callback();
            }).fail(callback);
        });
      }, function done(err) {
        if (err) {
          self.logger.onFatal(err);
        }
      });
    });
  };

  return PostsSeed;
})();
