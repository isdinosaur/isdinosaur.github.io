(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js19 .slide0').hasAttr('src')) { a='src'; } $('.js19 .slide0').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.18-416.png' : 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.18-208.png');
var a='data-src'; if($('.js19 .slide1').hasAttr('src')) { a='src'; } $('.js19 .slide1').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.27-416.png' : 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.27-208.png');
var a='data-src'; if($('.js19 .slide2').hasAttr('src')) { a='src'; } $('.js19 .slide2').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.33-416.png' : 'images/simulator-screen-shot-iphone-8-2019-07-20-at-04.12.33-208.png');
$('.js20').attr('src', (dpi>1) ? 'images/eyevision_icon-142.png' : 'images/eyevision_icon-71.png');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js21').attr('src', 'images/twitter-55.png');
$('.js22').attr('src', 'images/fb-47.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js19 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: true,arrows: true,infinite: true});
});