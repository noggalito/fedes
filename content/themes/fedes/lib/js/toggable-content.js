(function ($) {
  // prevent from horribly scrolling UI
  $(document).on("click", ".toggable-header", function (e) {
    return false;
  });
})(jQuery);
