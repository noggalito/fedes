$( document ).ready(function() {
  if(window.matchMedia('(min-width: 768px)').matches){
    $(".serviceList section").removeClass("col-xs-offset-2");

    $(".serviceList .toggable-content").removeAttr("id");

    $(".serviceList .gallery-element").filter(function( index ) {
      return index === 0;
    }).css("border-left" ,"1px solid #003c71");
  }
});
