(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/eyevision_icon-336.png' : 'images/eyevision_icon-168.png');
var a='data-src'; if($('.js2 .slide0').hasAttr('src')) { a='src'; } $('.js2 .slide0').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-xs-max-2019-07-20-at-02.20.47-506.png' : 'images/simulator-screen-shot-iphone-xs-max-2019-07-20-at-02.20.47-253.png');
var a='data-src'; if($('.js2 .slide1').hasAttr('src')) { a='src'; } $('.js2 .slide1').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-xs-max-2019-07-20-at-02.21.01-506.png' : 'images/simulator-screen-shot-iphone-xs-max-2019-07-20-at-02.21.01-253.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js2 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});