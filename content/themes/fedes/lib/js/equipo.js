// $( document ).ready(function() {
//   $('.contentEquipo .item .formEquipo").filter(function( index ) {
//     return index === 1;
//   }).hide(); });
(function () {
  var previousFor = function (item) {
    if (item.prev().length > 0) {
      return item.prev();
    } else {
      return item.parent().children().last();
    }
  };

  var nextFor = function (item) {
    if (item.next().length > 0) {
      return item.next();
    } else {
      return item.parent().children().first();
    }
  };

  $(document).on(
    'slide.bs.carousel',
    '.myCarouselEquipo',
    function (event) {
      $(document).trigger(
        'fedes:slideCarouselEquipo',
        event
      );
    }
  );

  $(document).on(
    'fedes:slideCarouselEquipo',
    function (event, e) {
      $(e.currentTarget).find('.item').removeClass('visible');
      var currentItem = $(e.relatedTarget);
      currentItem.addClass('active');
      previousFor(currentItem).addClass('visible');
      nextFor(currentItem).addClass('visible');
    }
  );

  // $(document).on(
  //   'slid.bs.carousel',
  //   '#myCarouselEquipo',
  //   function (event) {
  //     // var currentItem = $(event.relatedTarget);
  //     // currentItem.addClass('active');
  //     // previousFor(currentItem).addClass('visible');
  //     // nextFor(currentItem).addClass('visible');
  //   }
  // );

  $(document).on("ready", function () {
    var item = $(".carouselEquipo .item").filter(":first");
    previousFor(item).addClass('visible');
    nextFor(item).addClass('visible');
  })
})();
