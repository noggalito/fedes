(function ($) {
  var url = window.location.href;
  var tab = $('.blog-nav .nav li a').filter(function () {
    if (this.href === url) {
      return true;
    } else {
      $(this).parent().removeClass('active');
    }
  });
  tab.parent().addClass('active');
})(jQuery);
