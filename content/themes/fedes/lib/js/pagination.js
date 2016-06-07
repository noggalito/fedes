(function ($) {

  var pageTotal = parseInt($('#page-total').html(), 10);
  var pageCurrent = $('#page-current').html();
  var nav = $('#pagination-list')[0];
  var pathName = window.location.pathname;
  var newUrl = pathName.split('/').slice(1, 3).join('/');

  for (i = 1; i <= pageTotal; i++) {
    if (i == pageCurrent) {
      nav.html = nav.innerHTML + "<li class='active'><a href='#'>" + i + "</a></li>";
    } else {
      nav.html = nav.innerHTML + "<li><a href=/" + newUrl + "/page/" + i + ">" + i + "</a></li>";
    }
  }

})(jQuery);
