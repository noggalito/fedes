(function ($) {

  var pageTotal = parseInt($('#page-total').html());
  var pageCurrent = parseInt($('#page-current').html());
  var totalElements = parseInt($('#total-elements').html());
  var previousPage = $('#prev-page').html();
  var nextPage = $('#next-page').html();
  var previous = $('#prev').html();
  var next = $('#next').html();

  var nav = $('#pagination-list')[0];
  var pathName = window.location.pathname;
  var newUrl = pathName.split('/').slice(1, 3).join('/');

  if (totalElements === 0) {
    $('.pagination').hide();
  }

  if (previous) {
    nav.innerHTML = "<li>" +
      "<a href='" + previousPage + "' class='page-box-active prev-button'>" +
      "<img class='img-responsive'/>" +
      "</a>" +
      "</li>";
  }

  for (i = 1; i <= pageTotal; i++) {
    if (i === pageCurrent) {
      nav.innerHTML = nav.innerHTML +
        "<li class='active '><a href='#' class='page-box-active'>" + i + "</a></li>";
    } else {
      nav.innerHTML = nav.innerHTML +
        "<li>" +
        "<a href=/" + newUrl + "/page/" + i + " class='page-box' >" + i + "</a>" +
        "</li>";
    }
  }

  if (next) {
    nav.innerHTML = nav.innerHTML + "<li>" +
      "<a href='" + nextPage + "' class='page-box-active next-button'>" +
      "<img class='img-responsive'/>" +
      "</a>" +
      "</li>";
  }

})(jQuery);
