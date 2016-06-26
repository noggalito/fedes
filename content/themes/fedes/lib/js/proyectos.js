$( document ).ready(function() {
  if(window.matchMedia('(min-width: 768px)').matches){
    $(".projectList section").removeClass("col-xs-offset-2")

    $(".projectList .gallery-element").filter(function( index ) {
      return index === 0 || index === 3 ;
    }).css("border-left","1px solid #003c71")
  }
 });
