(function () {
  var FedesSearch = function () {
    this.$gscInput         = null;
    this.iconSelector      = '.gcse-fedes-search .glyphicon';
    this.inputSelector     = '.gcse-fedes-search input[type=search]';
    this.formSelector      = '.gcse-fedes-search form';
    this.gscBtnSelector    = '.gsc-search-button input';
    this.gscInputSelector  = '.gsc-input-box input';
    this.listeners();
  };

  FedesSearch.prototype.listeners = function () {
    $(document).on(
      'keyup',
      this.inputSelector,
      $.proxy(this.updateGscInput, this)
    );
    $(document).on(
      'click',
      this.iconSelector,
      $.proxy(this.triggerAndSearch, this)
    );
    $(document).on(
      'submit',
      this.formSelector,
      $.proxy(this.triggerAndSearch, this)
    );
  };

  FedesSearch.prototype.updateGscInput = function (e) {
    if (this.gscInput()) {
      this.gscInput().val(e.currentTarget.value);
    }
  };

  FedesSearch.prototype.gscInput = function () {
    if (!this.$gscInput && $(this.gscInputSelector).length > 0) {
      this.$gscInput = $(this.gscInputSelector);
    }
    return this.$gscInput;
  };

  FedesSearch.prototype.triggerAndSearch = function () {
    this.triggerInputChange();
    return this.performSearch();
  };

  FedesSearch.prototype.triggerInputChange = function () {
    $(this.inputSelector).trigger('keyup');
  };

  FedesSearch.prototype.performSearch = function () {
    $(this.gscBtnSelector).trigger('click');
    return false;
  };

  new FedesSearch();
})();
