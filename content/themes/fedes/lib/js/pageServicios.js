(function ($) {
  var parentId = '#gallery-servicios';
  $(parentId + ' .collapse').on('show.bs.collapse', function (e) {
    var actives = $(parentId).find('.in, .collapsing');
    actives.each(function (index, element) {
      $(element).collapse('hide');
    });
  });
})(jQuery);
