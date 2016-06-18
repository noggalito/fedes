(function () {
  'use strict';

  var apiKey = 'AIzaSyDKeYOA8bgsRLuBCH_104zFdOL1QV4ORbc';

  var FedesMap = function ($selector) {
    this.$selector = $selector;
    this.loadGmaps();
  };

  FedesMap.prototype.loadGmaps = function () {
    var $script = $('<script />', {
      async: 'async',
      defer: 'defer',
      src: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=cafrilosaMap.gmapsLoaded'
    });
    $('body').append($script);
  };

  FedesMap.prototype.gmapsLoaded = function () {
    this.setLatLng();
    this.createMap();
    this.createMarker();
  };

  FedesMap.prototype.setLatLng = function () {
    this.latLng = new google.maps.LatLng(
      -3.987231,
      -79.1964876
    );
  };

  FedesMap.prototype.createMap = function () {
    this.map = new google.maps.Map(this.$selector[0], {
      center: this.latLng,
      zoom: 18
    });
  };

  var image ='../../default/icono_mapa_fedes.png'
  FedesMap.prototype.createMarker = function () {
    this.marker = new google.maps.Marker({
      position: this.latLng,
      title: 'Fedes',
      map: this.map,
      icon: image
    });
  };

  var selector = '.mapFedes';

  $(document).on('ready', function () {
    var $selector = $(selector);
    if ($selector.length > 0) {
      window.cafrilosaMap = new FedesMap($selector);
    }
  });
})();
