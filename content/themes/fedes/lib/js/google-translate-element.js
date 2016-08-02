// define callback in global context
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'en',
    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  }, 'google_translate_element');
}

// load google library
$('body').append(
  $('<script />', {
    type: 'text/javascript',
    src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  })
);

(function () {
  var fireEvent = function(element, event) {
    // taken from http://stackoverflow.com/questions/6303021/trigger-google-web-translate-element#answer-9810401
    if (document.createEventObject){
      // dispatch for IE
      var evt = document.createEventObject();
      return element.fireEvent('on' + event, evt);
    }
    else {
      // dispatch for firefox + others
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true ); // event type,bubbling,cancelable
      return !element.dispatchEvent(evt);
    }
  };

  var Translator = function () {
    this.translateListener();
  };

  Translator.prototype.translateListener = function () {
    $('.translate-english-action').on('click', this.performTranslate);
  };

  Translator.prototype.performTranslate = function (e) {
    $('.goog-te-combo option[value="en"]').prop('selected', true);
    var option = $('.goog-te-combo').get(0);
    fireEvent(option, 'change');
  };

  $(document).on('ready', function () {
    new Translator();
  });
})();
