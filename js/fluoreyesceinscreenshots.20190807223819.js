(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="dpoubduAjtejoplf/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js42 .slide0').hasAttr('src')) { a='src'; } $('.js42 .slide0').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-8-2019-08-07-at-19.50.42-416.png' : 'images/simulator-screen-shot-iphone-8-2019-08-07-at-19.50.42-208.png');
var a='data-src'; if($('.js42 .slide1').hasAttr('src')) { a='src'; } $('.js42 .slide1').attr(a, (dpi>1) ? 'images/simulator-screen-shot-iphone-8-2019-08-07-at-19.50.58-416.png' : 'images/simulator-screen-shot-iphone-8-2019-08-07-at-19.50.58-208.png');
$('.js43').attr('src', (dpi>1) ? 'images/fluoreyesein-136.png' : 'images/fluoreyesein-68.png');};
if(!window.HTMLPictureElement){r();}
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js44').attr('src', 'images/twitter-55.png');
$('.js45').attr('src', 'images/fb-47.png');

}
if(!window.pn)window.pn=[];
plst=function(){for(var p in window.pn){window.pn[p].pause();}};
js41=new Plyr('.js41 audio', { 'iconUrl': 'css/plyr.svg', controls: ['play','progress','current-time','mute','volume'] });
js41.volume=0.5;
js41.on('play',function(){plst();window.pn['js41']=js41;});
js41.on('pause',function(){delete window.pn['js41'];});
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js42 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',speed: 300,dots: true,arrows: true,infinite: true});
});