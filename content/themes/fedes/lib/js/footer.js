$( document ).ready(function() {
  var pathname = window.location.pathname;
  if(pathname === "/contactos/"){
    $(".footerPrincipal .hideForm").hide();
    $(".footerPrincipal .showLogo").removeClass("hidden");
  }
});
