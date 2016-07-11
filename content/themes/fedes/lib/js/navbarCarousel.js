(function () {
  var NavbarChecker = function () {
    this.$mediaQuery = window.matchMedia('(max-width: 480px)');
    var $selector = $(".navbar-carousel .navbar-menuItem");
    this.$elements = $selector.filter(function( index ) {
      return index === 0 || index === 1 || index === 2;
    });
  };

  NavbarChecker.prototype.checkForHide = function () {
    if ( this.$mediaQuery.matches ) {
      this.$elements.show();
    } else {
      this.$elements.hide();
    }
  };

  NavbarChecker.prototype.addListener = function () {
    this.$mediaQuery.addListener(
      $.proxy(this.checkForHide, this)
    );
  };

  var checker;

  $(document).ready(function() {
    checker = new NavbarChecker();
    checker.checkForHide();
    checker.addListener();
  });
})();
