(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="dpoubduAjtejoplf/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js4').attr('src', (dpi>1) ? 'images/deynos-logo2-134.jpeg' : 'images/deynos-logo2-67.jpeg');
$('.js5').attr('src', (dpi>1) ? 'images/eyevision_icon-134.png' : 'images/eyevision_icon-67.png');
$('.js6').attr('src', (dpi>1) ? 'images/eyetranslate-icon-134.png' : 'images/eyetranslate-icon-67.png');
$('.js7').attr('src', (dpi>1) ? 'images/fluoreyesein-134.png' : 'images/fluoreyesein-67.png');
$('.js8').attr('src', (dpi>1) ? 'images/worth4dot-134.png' : 'images/worth4dot-67.png');
$('.js9').attr('src', (dpi>1) ? 'images/pce_headshot3-114.jpg' : 'images/pce_headshot3-57.jpg');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js10').attr('src', 'images/twitter-55.png');
$('.js11').attr('src', 'images/fb-47.png');

}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});