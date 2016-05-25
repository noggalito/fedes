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
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      title: 'Dirección:',
      slug: 'contactos-direccion',
      markdown: 'San Cayatano alto, calle París \n'+
      'instalaciones UTPL. Loja_Ecuador',
      html: '<p>San Cayatano alto, calle París <br />'+
      'instalaciones UTPL. Loja_Ecuador</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      title: 'Fono:',
      slug: 'contactos-fono',
      markdown: '(593 7)2585700'+
      '(593 7)2585706'+
      'Email: info@fedes.ec',
      html: '<p>(593 7)2585700</p>'+
      '<p>(593 7)2585706</p>'+
      '<p>Email: info@fedes.ec</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString()
    },
    {
      title: 'Cooperación para el desarrollo',
      slug: 'cooperacion-para-el-desarrollo',
      markdown: 'Lorem ipsum dolor sit amet, sea ea mutat ignota,' +
        ' id commune lobortis qui. Fastidii mnesarchum mel id, mel ' +
        'no vide reprehendunt. Mel deserunt indoctum id. Id tollit ' +
        'suscipit per, in veritus menandri conceptam cum.',
      html: '<p>Lorem ipsum dolor sit amet, sea ea mutat ignota,' +
        ' id commune lobortis qui. Fastidii mnesarchum mel id, mel ' +
        'no vide reprehendunt. Mel deserunt indoctum id. Id tollit ' +
        'suscipit per, in veritus menandri conceptam cum.</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/copdesarrollo.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'proyectos'
    },
    {
      title: 'cima',
      slug: 'cima',
      markdown: 'Id congue efficiendi per. At impedit minimum vis,' +
        ' te eum esse timeam. Melius cetero ut vel, an iusto inermis ' +
        'laboramus est. Diceret dissentiet deterruisset per an, ' +
        'et rebum iuvaret equidem per, vix at erant tollit quaeque.',
      html: '<p>Id congue efficiendi per. At impedit minimum vis,' +
        ' te eum esse timeam. Melius cetero ut vel, an iusto inermis ' +
        'laboramus est. Diceret dissentiet deterruisset per an, ' +
        'et rebum iuvaret equidem per, vix at erant tollit quaeque.</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/cima.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'proyectos'
    },
    {
      title: 'prendho',
      slug: 'prendho',
      markdown: 'Ut aliquam admodum feugait cum, ea noster eleifend ' +
        'necessitatibus vel. Eos quot autem ne. Prima dictas vix an. ' +
        'In rebum veritus denique quo.',
      html: '<p>Ut aliquam admodum feugait cum, ea noster eleifend ' +
        'necessitatibus vel. Eos quot autem ne. Prima dictas vix an. ' +
        'In rebum veritus denique quo.</p>',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/default/prendho.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
      tag: 'proyectos'
    },
    {
      title: 'Imagen1Carousel',
      slug: 'imagen1carousel',
      markdown:'',
      html:'',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/carousel1.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
    },
    {
      title: 'Imagen2Carousel',
      slug: 'imagen2carousel',
      markdown:'',
      html:'',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/servicios.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
    },
    {
      title: 'Imagen3Carousel',
      slug: 'imagen3carousel',
      markdown:'',
      html:'',
      featured: false,
      page: false,
      status: 'published',
      language: 'en_US',
      image: '/assets/img/consultoria.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      published_at: new Date().toISOString(),
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
