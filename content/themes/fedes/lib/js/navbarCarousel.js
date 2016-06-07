$( document ).ready(function() {
  if(window.matchMedia('(max-width: 480px)').matches){
    $(".navbar-carousel").children().addClass("navbar-ItemMovil");
  }else{
    $(".navbar-carousel .navbar-menuItem").filter(function( index ) {
      return index === 0 || index === 1 || index === 2;
    }).hide();
  }
});
