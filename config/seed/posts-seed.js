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
      image: String,
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
    this.Tags = options.db.qDefine('tags', {
      id: Number,
      slug: String,
      name: String
    });
    this.PostsTags = options.db.qDefine('posts_tags', {
      id: Number,
      post_id: Number,
      tag_id: Number
    });
  };

  var defaultPosts = [

    {

      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      title: '',
      slug: 'cooperacion-para-el-desarrollo',

      tag: 'proyectos'
    },
    {
      title: 'cima',
      slug: 'cima',
      tag: 'proyectos'
    },
    {
      title: 'prendho',
      slug: 'prendho',
      tag: 'proyectos'
    },
    {
      title: 'Imagen1Carousel',
      slug: 'imagen1carousel',
      markdown:'esta es la descripcion de la imagen1',
      html:'<p>esta es la descripcion de la imagen1</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/carousel1.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'carouselimagen'
    },
    {
      title: 'Imagen2Carousel',
      slug: 'imagen2carousel',
      markdown:'esta es la descripcion de la imagen2',
      html:'<p>esta es la descripcion de la imagen2</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/servicios.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'carouselimagen'
    },
    {
      title: 'Imagen3Carousel',
      slug: 'imagen3carousel',
      markdown:'esta es la descripcion de la imagen3',
      html:'<p>esta es la descripcion de la imagen3</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/consultoria.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'carouselimagen'
    },
    // Static pages
    {
      title: 'Servicios',
      slug: 'servicios',
      markdown: '',
      html: '',
      featured: false,
      page: true,
      status: 'published',
      language: 'en_US',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    // Fedes Services
    {
      title: 'Consultoría',
      slug: 'consultoria',
      markdown: 'Consultoria ipsum dolor sit amet, consectetur adipisicing,\n' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
        '* Lorem ipsum dolor sit amet.\n' +
        '* Consectetuer adipiscing elit.\n' +
        '* Aenean commodo igula eget dolor.',
      html: '<p>Consultoria ipsum dolor sit amet, consectetur adipisicing, <br />' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />' +
        'laboris nisi ut aliquip ex ea commodo consequat.</p>' +
        '<ul>' +
        '<li>Lorem ipsum dolor sit amet.</li>' +
        '<li>Consectetuer adipiscing elit.</li>' +
        '<li>Aenean commodo igula eget dolor.</li>' +
        '</ul>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/consultoria.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'servicios'
    },
    {
      title: 'Asesoramiento',
      slug: 'asesoramiento',
      markdown: 'Asesoramiento ipsum dolor sit amet, consectetur,\n' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
        'laboris nisi ut aliquip ex ea commodo consequat.\n\n' +
        '* Lorem ipsum dolor sit amet.\n' +
        '* Consectetuer adipiscing elit.\n' +
        '* Aenean commodo igula eget dolor.',
      html: '<p>Asesoramiento ipsum dolor sit amet, consectetur, <br />' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />' +
        'laboris nisi ut aliquip ex ea commodo consequat.</p>' +
        '<ul>' +
        '<li>Lorem ipsum dolor sit amet.</li>' +
        '<li>Consectetuer adipiscing elit.</li>' +
        '<li>Aenean commodo igula eget dolor.</li>' +
        '</ul>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/asesoramieto.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'servicios'
    },
    {
      title: 'Trabajo con municipios',
      slug: 'trabajo-con-municipios',
      markdown: 'Trabajo ipsum dolor sit amet, consectetur,\n' +
        'sed do eiusmod tempor incididunt ut labore et \n' +
        'dolore magna aliqua. Ut enim ad minim veniam,\n' +
        'quis nostrud exercitation ullamco laboris nisi ut\n' +
        'aliquip ex ea commodo consequat.\n\n' +
        '* Lorem ipsum dolor sit amet.\n' +
        '* Consectetuer adipiscing elit.\n' +
        '* Aenean commodo igula eget dolor.',
      html: '<p>Trabajo ipsum dolor sit amet, consectetur, <br />' +
        'sed do eiusmod tempor incididunt ut labore et <br />' +
        'dolore magna aliqua. Ut enim ad minim veniam, <br />' +
        'quis nostrud exercitation ullamco laboris nisi ut <br />' +
        'aliquip ex ea commodo consequat.</p>' +
        '<ul>' +
        '<li>Lorem ipsum dolor sit amet.</li>' +
        '<li>Consectetuer adipiscing elit.</li>' +
        '<li>Aenean commodo igula eget dolor.</li>' +
        '</ul>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/trabajo.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'servicios'
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
        post.id = existingPost.id;
        post.title = existingPost.title;
        existentCb(post);
      } else {
        successCb(post);
      }
    });
  };

  PostsSeed.prototype.ifNonExistPostTagRelation = function (post,
                                                            tag,
                                                            existentCb,
                                                            successCb) {
    return this.PostsTags.qOne({
      post_id: post.id,
      tag_id: tag.id
    }).then(function (existRelation) {
      if (existRelation) {
        existentCb(post, tag);
      } else {
        successCb(post, tag);
      }
    });
  };

  PostsSeed.prototype.assignTagsToPosts = function (post, callback) {
    var self = this;
    if (post.tag) {
      self.Tags.qOne({ slug: post.tag })
        .then(function (tag) {
          var relationExists = function (post, tag) {
            var relation = post.title + ' - ' + tag.name;
            self.logger.info('relation exists', relation);
            callback();
          };

          var relationNotExists = function (post, tag) {
            var postTag = {
              post_id: post.id,
              tag_id: tag.id
            };
            self.PostsTags.qCreate(postTag)
              .then(function (res) {
                var relation = post.title + ' - ' + tag.name;
                self.logger.success('relation ', relation);
                callback();
              })
              .fail(callback);
          };

          return self.ifNonExistPostTagRelation(post,
                                                tag,
                                                relationExists,
                                                relationNotExists);
        });
    } else {
      callback();
    }
  };


  PostsSeed.prototype.performQueries = function (nextSeed) {

    var self = this;

    return self.firstUser(function (user) {

      async.eachSeries(defaultPosts,
        function createPost(defaultPost, callback) {

          var postExists = function (post) {
            self.logger.info('post exists', post.title);
            self.assignTagsToPosts(post, callback);
          };

          var postNotExist = function (post) {
            var tag = post.tag;
            post.uuid = uuid.v4();
            post.author_id = user.id;
            post.created_by = user.id;
            post.updated_by = user.id;
            post.published_by = user.id;

            return self.Posts.qCreate(post)
              .then(function (res) {
                self.logger.success('seeded post', res.title);
                //Adding tag
                res.tag = tag;
                self.assignTagsToPosts(res, callback);
              }).fail(callback);
          };

          return self.ifNonExistentPost(defaultPost, postExists, postNotExist);
        },
        function done(err) {
          if (err) {
            self.logger.onFatal(err);
          } else {
            nextSeed();
          }
        });
    });
  };

  return PostsSeed;
})();
