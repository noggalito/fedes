!function(a){var e=window.location.href,i=a(".blog-nav .nav li a").filter(function(){return this.href===e?!0:void a(this).parent().removeClass("active")});i.parent().addClass("active")}(jQuery);
$(document).ready(function(){$(".carousel-inner .item").filter(":first").addClass("active"),$(".navbar-carousel li a").addClass("navbar-menuItem"),$(".listHeader li a").addClass("navbar-menuItem")});
$(document).ready(function(){$(".carouselAliados .item").filter(":first").addClass("active")});
$(document).ready(function(){$(".cauroselEquipo .item").filter(":first").addClass("active"),$("#myCarouselEquipo").carousel({interval:4e3}),window.matchMedia("(min-width: 768px)").matches&&$(".cauroselEquipo .item").each(function(){var i=$(this).next();i.length||(i=$(this).siblings(":first")),i.children(":first-child").clone().appendTo($(this)),i.next().length>0?i.next().children(":first-child").clone().appendTo($(this)).addClass("rightest"):$(this).siblings(":first").children(":first-child").clone().appendTo($(this))})});
$(document).ready(function(){$(".contentEquipo .item .formEquipo").filter(function(n){return 1===n}).hide()});
$(document).ready(function(){var o=window.location.pathname;"/contactos/"===o&&($(".footerPrincipal .hideForm").hide(),$(".footerPrincipal .showLogo").removeClass("hidden"))});
!function(l){var n="#gallery-fedes";l(n+" .collapse").on("show.bs.collapse",function(e){var o=l(n).find(".in, .collapsing");o.each(function(n,e){l(e).collapse("hide")})})}(jQuery);
$(document).ready(function(){window.matchMedia("(max-width: 480px)").matches?$(".navbar-carousel").children().addClass("navbar-ItemMovil"):$(".navbar-carousel .navbar-menuItem").filter(function(a){return 0===a||1===a||2===a}).hide()});
!function(e){var a=parseInt(e("#page-total").html()),n=parseInt(e("#page-current").html()),t=parseInt(e("#total-elements").html()),l=e("#prev-page").html(),s=e("#next-page").html(),r=e("#prev").html(),p=e("#next").html(),o=e("#pagination-list")[0],c=window.location.pathname,g=c.split("/").slice(1,3).join("/");for(0===t&&e(".pagination").hide(),r&&(o.innerHTML="<li><a href='"+l+"' class='page-box-active prev-button'><img class='img-responsive'/></a></li>"),i=1;i<=a;i++)i===n?o.innerHTML=o.innerHTML+"<li class='active '><a href='#' class='page-box-active'>"+i+"</a></li>":o.innerHTML=o.innerHTML+"<li><a href=/"+g+"/page/"+i+" class='page-box' >"+i+"</a></li>";p&&(o.innerHTML=o.innerHTML+"<li><a href='"+s+"' class='page-box-active next-button'><img class='img-responsive'/></a></li>")}(jQuery);
+function(t){"use strict";function e(e){return e.is('[type="checkbox"]')?e.prop("checked"):e.is('[type="radio"]')?!!t('[name="'+e.attr("name")+'"]:checked').length:t.trim(e.val())}function r(e){return this.each(function(){var r=t(this),o=t.extend({},a.DEFAULTS,r.data(),"object"==typeof e&&e),i=r.data("bs.validator");(i||"destroy"!=e)&&(i||r.data("bs.validator",i=new a(this,o)),"string"==typeof e&&i[e]())})}var a=function(r,o){this.options=o,this.$element=t(r),this.$inputs=this.$element.find(a.INPUT_SELECTOR),this.$btn=t('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]')),o.errors=t.extend({},a.DEFAULTS.errors,o.errors);for(var i in o.custom)if(!o.errors[i])throw new Error("Missing default error message for custom validator: "+i);t.extend(a.VALIDATORS,o.custom),this.$element.attr("novalidate",!0),this.toggleSubmit(),this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",a.INPUT_SELECTOR,t.proxy(this.onInput,this)),this.$element.on("submit.bs.validator",t.proxy(this.onSubmit,this)),this.$element.find("[data-match]").each(function(){var r=t(this),a=r.data("match");t(a).on("input.bs.validator",function(t){e(r)&&r.trigger("input.bs.validator")})})};a.INPUT_SELECTOR=':input:not([type="submit"], button):enabled:visible',a.FOCUS_OFFSET=20,a.DEFAULTS={delay:500,html:!1,disable:!0,focus:!0,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}},a.VALIDATORS={"native":function(t){var e=t[0];return e.checkValidity?e.checkValidity():!0},match:function(e){var r=e.data("match");return!e.val()||e.val()===t(r).val()},minlength:function(t){var e=t.data("minlength");return!t.val()||t.val().length>=e}},a.prototype.onInput=function(e){var r=this,a=t(e.target),o="focusout"!==e.type;this.validateInput(a,o).done(function(){r.toggleSubmit()})},a.prototype.validateInput=function(r,a){var o=e(r),i=r.data("bs.validator.previous"),s=r.data("bs.validator.errors");if(i===o)return t.Deferred().resolve();r.data("bs.validator.previous",o),r.is('[type="radio"]')&&(r=this.$element.find('input[name="'+r.attr("name")+'"]'));var n=t.Event("validate.bs.validator",{relatedTarget:r[0]});if(this.$element.trigger(n),!n.isDefaultPrevented()){var d=this;return this.runValidators(r).done(function(e){r.data("bs.validator.errors",e),e.length?a?d.defer(r,d.showErrors):d.showErrors(r):d.clearErrors(r),s&&e.toString()===s.toString()||(n=e.length?t.Event("invalid.bs.validator",{relatedTarget:r[0],detail:e}):t.Event("valid.bs.validator",{relatedTarget:r[0],detail:s}),d.$element.trigger(n)),d.toggleSubmit(),d.$element.trigger(t.Event("validated.bs.validator",{relatedTarget:r[0]}))})}},a.prototype.runValidators=function(r){function o(t){return r.data(t+"-error")||r.data("error")||"native"==t&&r[0].validationMessage||n.errors[t]}var i=[],s=t.Deferred(),n=this.options;return r.data("bs.validator.deferred")&&r.data("bs.validator.deferred").reject(),r.data("bs.validator.deferred",s),t.each(a.VALIDATORS,t.proxy(function(t,a){if((e(r)||r.attr("required"))&&(r.data(t)||"native"==t)&&!a.call(this,r)){var s=o(t);!~i.indexOf(s)&&i.push(s)}},this)),!i.length&&e(r)&&r.data("remote")?this.defer(r,function(){var a={};a[r.attr("name")]=e(r),t.get(r.data("remote"),a).fail(function(t,e,r){i.push(o("remote")||r)}).always(function(){s.resolve(i)})}):s.resolve(i),s.promise()},a.prototype.validate=function(){var e=this;return t.when(this.$inputs.map(function(r){return e.validateInput(t(this),!1)})).then(function(){e.toggleSubmit(),e.focusError()}),this},a.prototype.focusError=function(){if(this.options.focus){var e=t(".has-error:first :input");0!==e.length&&(t(document.body).animate({scrollTop:e.offset().top-a.FOCUS_OFFSET},250),e.focus())}},a.prototype.showErrors=function(e){var r=this.options.html?"html":"text",a=e.data("bs.validator.errors"),o=e.closest(".form-group"),i=o.find(".help-block.with-errors"),s=o.find(".form-control-feedback");a.length&&(a=t("<ul/>").addClass("list-unstyled").append(t.map(a,function(e){return t("<li/>")[r](e)})),void 0===i.data("bs.validator.originalContent")&&i.data("bs.validator.originalContent",i.html()),i.empty().append(a),o.addClass("has-error has-danger"),o.hasClass("has-feedback")&&s.removeClass(this.options.feedback.success)&&s.addClass(this.options.feedback.error)&&o.removeClass("has-success"))},a.prototype.clearErrors=function(t){var r=t.closest(".form-group"),a=r.find(".help-block.with-errors"),o=r.find(".form-control-feedback");a.html(a.data("bs.validator.originalContent")),r.removeClass("has-error has-danger"),r.hasClass("has-feedback")&&o.removeClass(this.options.feedback.error)&&e(t)&&o.addClass(this.options.feedback.success)&&r.addClass("has-success")},a.prototype.hasErrors=function(){function e(){return!!(t(this).data("bs.validator.errors")||[]).length}return!!this.$inputs.filter(e).length},a.prototype.isIncomplete=function(){function r(){return!e(t(this))}return!!this.$inputs.filter("[required]").filter(r).length},a.prototype.onSubmit=function(t){this.validate(),(this.isIncomplete()||this.hasErrors())&&t.preventDefault()},a.prototype.toggleSubmit=function(){this.options.disable&&this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())},a.prototype.defer=function(e,r){return r=t.proxy(r,this,e),this.options.delay?(window.clearTimeout(e.data("bs.validator.timeout")),void e.data("bs.validator.timeout",window.setTimeout(r,this.options.delay))):r()},a.prototype.destroy=function(){return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator").find(".form-control-feedback").removeClass([this.options.feedback.error,this.options.feedback.success].join(" ")),this.$inputs.off(".bs.validator").removeData(["bs.validator.errors","bs.validator.deferred","bs.validator.previous"]).each(function(){var e=t(this),r=e.data("bs.validator.timeout");window.clearTimeout(r)&&e.removeData("bs.validator.timeout")}),this.$element.find(".help-block.with-errors").each(function(){var e=t(this),r=e.data("bs.validator.originalContent");e.removeData("bs.validator.originalContent").html(r)}),this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"),this.$element.find(".has-error, .has-danger").removeClass("has-error has-danger"),this};var o=t.fn.validator;t.fn.validator=r,t.fn.validator.Constructor=a,t.fn.validator.noConflict=function(){return t.fn.validator=o,this},t(window).on("load",function(){t('form[data-toggle="validator"]').each(function(){var e=t(this);r.call(e,e.data())})})}(jQuery);