$( document ).ready(function() {
  $(".listHeader .navbar-menuItem").filter(function( index ) {
    return index === 1 || index === 2 || index === 3 || index === 4;
  }).hide(); });
