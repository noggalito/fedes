(function($) {
  $(document).on("ready", function() {
    var pathname = window.location.pathname;
    if(pathname === "/contactos/"){
      $(".hide-on-contacts").hide();
      $(".show-on-contacts").removeClass("hidden");
      $(".when-on-contacts").addClass("actually-on-contacts");
    }
  });
})(jQuery);
