// set active element on list header if any
$(document).on("ready", function () {
  var currentPath = window.location.pathname;
  $(".listHeader a[href='" + currentPath + "']").addClass("active");
});
