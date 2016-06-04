$( document ).ready(function() {
  $(".cauroselEquipo .item").filter(":first").addClass("active");
  $('#myCarouselEquipo').carousel({
    interval: 4000
  });

  $('.cauroselEquipo .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
});
