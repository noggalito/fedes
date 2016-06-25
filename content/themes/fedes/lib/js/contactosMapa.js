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
      src: 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=fedesMap.gmapsLoaded'
    });
    $('body').append($script);
  };

  FedesMap.prototype.gmapsLoaded = function () {
    this.setLatLng();
    this.setCenter();
    this.createMap();
    this.createMarker();
  };

  FedesMap.prototype.setCenter = function () {
    this.mapCenter = new google.maps.LatLng(
      -3.986531,
      -79.1974876
    );
  };

  FedesMap.prototype.setLatLng = function () {
    this.latLng = new google.maps.LatLng(
      -3.986651,
      -79.196911
    );
  };

  FedesMap.prototype.createMap = function () {
    this.map = new google.maps.Map(this.$selector[0], {
      center: this.mapCenter,
      zoom: 16
    });
  };

  FedesMap.prototype.createMarker = function () {
    var image = {
      url: '../../default/icono_mapa_fedes.png',
      anchor: new google.maps.Point(0, 0)
    };
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
      window.fedesMap = new FedesMap($selector);
    }
  });
})();
