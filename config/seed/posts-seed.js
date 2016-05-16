module.exports = (function () {
  var async = require('async');
  var gutil = require('gulp-util');
  var PostsSeed = function (db) {
    this.Posts = db.qDefine('posts', {
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
      created_at: Number,
      updated_at: Number,
      published_at: Number
    });
    this.Users = db.qDefine('users', {
      uuid: Number,
      id: Number
    });
  };

  var defaultPosts = [
    {
      title: 'Texto pricipal',
      slug: 'texto-principal',
      markdown: '<< La innovación es lo que distingue a los ' +
      'líderes de los \nseguidores >>.- Steve Jobs',
      html: '<p>&lt;&lt; La innovación es lo que distingue a los ' +
      'líderes de los <br />seguidores >>.- Steve Jobs</p>',
      featured: 0,
      page: 0,
      status: 'published',
      language: 'en_US',
      created_at: Date.now(),
      updated_at: Date.now(),
      published_at: Date.now()
    }
  ];

  PostsSeed.prototype.performQueries = function () {
    var self = this;
    return self.Users.qOne()
      .then(function (user) {
        async.eachSeries(defaultPosts,
          function createPost(post, callback) {
            post.uuid = user.uuid;
            post.author_id = user.id;
            post.created_by = user.id;
            post.updated_by = user.id;
            post.published_by = user.id;
            return self.Posts.qCreate(post)
              .then(function (res) {
                gutil.log(gutil.colors.green('SUCCESS'), res.title);
                callback();
              })
              .fail(function (err) {
                callback(err);
              });
          }, function done(err) {
            if (err) {
              gutil.log(gutil.colors.red('FAILED'), err.instance.title);
            }
          });
      })
      .fail(function (err) {
        gutil.log(gutil.colors.red('ERROR'), err);
      });
  };

  return PostsSeed;
})();
