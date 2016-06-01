(function ($) {
  var url = window.location.href;
  var tab = $('.nav-blog .nav li a').filter(function () {
    if (this.href === url) {
      return true;
    } else {
      $(this).parent().removeClass('active');
    }
  });
  tab.parent().addClass('active');
})(jQuery);
