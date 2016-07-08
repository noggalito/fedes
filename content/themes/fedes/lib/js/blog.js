(function ($) {
  var url = window.location.href;
  var tab = $('.blog-nav .nav li a').filter(function () {
    var re = /([^]*)page\/[^]*/;
    var parseUrls = re.exec(url);
    url = parseUrls ? parseUrls[1] : url;
    if (this.href === url) {
      return true;
    } else {
      $(this).parent().removeClass('active');
    }
  });
  tab.parent().addClass('active');
  $('.blog-post-content').matchHeight();
})(jQuery);
