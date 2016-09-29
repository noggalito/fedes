$( document ).ready(function() {
  $(".myCarouselEquipo").each(function () {
    var firstItem = $(this).find(".item").filter(":first");
    firstItem.addClass("active");
    $(document).trigger(
      'fedes:slideCarouselEquipo',
      {
        currentTarget: this,
        relatedTarget: firstItem[0]
      }
    );
  });
  $('.myCarouselEquipo').each(function () {
    $(this).carousel({
      interval: 4000
    });
  });
});
