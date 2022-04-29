/*
 * frydBox - jQuery plugin
 * Free and lightweight Lightbox or Fancybox alternative
 *
 * Copyright (c) 2017 Kamil Frydlewicz
 * www.frydlewicz.pl
 *
 * Version: 1.0.3
 * Requires: jQuery v1.7+
 *
 * MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
if(typeof jQuery==="undefined"){throw new Error("frydBox requires jQuery")}(function(x){var g="frydBox";var H={"box-sizing":"border-box",padding:"0",margin:"0",background:"none",border:"none",outline:"none",opacity:"1",cursor:"default"};var s=x.extend({},H,{display:"none",position:"fixed",left:"0",top:"0","z-index":"999999995",width:"100%",height:"100%"});var m=x.extend({},H,{position:"fixed",left:"50%",top:"50%","z-index":"999999998",width:"80px",height:"80px",margin:"-50px 0 0 -50px",border:"10px solid rgba(255,255,255,.4)","border-top-color":"#fff","border-radius":"50%",opacity:"0"});var z=x.extend({},H,{display:"none",position:"fixed","z-index":"999999996"});var t=x.extend({},H,{position:"absolute",left:"0",top:"25%","z-index":"999999997",width:"50%",height:"50%",overflow:"hidden",background:"no-repeat left 20px center","font-size":"10000px",cursor:"pointer",opacity:"0",filter:"drop-shadow(0 0 5px #000)"});var b=x.extend({},H,{position:"absolute",right:"0",top:"25%","z-index":"999999997",width:"50%",height:"50%",overflow:"hidden",background:"no-repeat right 20px center","font-size":"10000px",cursor:"pointer",opacity:"0",filter:"drop-shadow(0 0 5px #000)"});var L=x.extend({},H,{position:"absolute",right:"-10px",top:"-10px","z-index":"999999997",width:"50px",height:"50px",overflow:"hidden",background:"no-repeat right top",cursor:"pointer",opacity:"0",filter:"drop-shadow(0 0 5px #000)"});var C=x.extend({},H,{display:"none",width:"100%",height:"auto"});var A={prefix:"frydBox_",lazyLoading:true,lazyLoadingDelay:100,fadeDuration:500,moveDuration:700,fadeWhenMove:true,screenPercent:0.88,backOpacity:0.6,shadowOpacity:0.6,shadowSize:18,borderSize:10,borderColor:"#fff",borderRadius:8,showLoader:true,scrollBars:false};var w;var B;var q;var e=false;var a;var v;var p;var K;var I;var G;(function(){var O;var N=document.currentScript;if(N){O=N.src}else{O=location.href}var M=O.lastIndexOf("/");if(M>=0){G=O.substring(0,M+1)}else{G=O.substring(0,O.lastIndexOf("\\")+1)}})();function l(){a=x(window).width();v=x(window).height();p=A.screenPercent*a;K=A.screenPercent*v}function j(M){switch(M.which){case 27:n();break;case 37:d();break;case 39:y();break}}function r(O,M){for(var N in O){M.css(N,O[N])}}function F(){console.log(g+": powered by www.frydlewicz.pl");w=x("body");I=w.css("overflow");x(window).on("resize",l);x(document).on("keydown",j);l();D();f()}function D(){B=x('<div id="'+A.prefix+'back" class="'+A.prefix+'back"></div>');r(s,B);B.on("click",function(){n()});w.append(B)}function f(){if(!A.showLoader){return}q=x('<div id="'+A.prefix+'loader" class="'+A.prefix+'loader"></div>');r(m,q);w.append(q)}function J(M){var N=x('<div id="'+A.prefix+"cont-"+M+'" class="'+A.prefix+'cont"></div>');r(z,N);w.append(N);return N}function o(Q,P){var N=x('<span id="'+A.prefix+"prev-"+P+'" class="'+A.prefix+'prev">&nbsp;</span>');r(t,N);N.on("mouseenter",function(){if(x("."+A.prefix+"active").prev("."+A.prefix+"img").length){x(this).css("opacity",1)}});N.on("mouseleave",function(){x(this).css("opacity",0)});N.on("click",function(){d()});Q.append(N);var M=x('<span id="'+A.prefix+"next-"+P+'" class="'+A.prefix+'next">&nbsp;</span>');r(b,M);M.on("mouseenter",function(){if(x("."+A.prefix+"active").next("."+A.prefix+"img").length){x(this).css("opacity",1)}});M.on("mouseleave",function(){x(this).css("opacity",0)});M.on("click",function(){y()});Q.append(M);var O=x('<span id="'+A.prefix+"close-"+P+'" class="'+A.prefix+'close">&nbsp;</span>');r(L,O);O.on("mouseenter",function(){x(this).css("opacity",1)});O.on("mouseleave",function(){x(this).css("opacity",0)});O.on("click",function(){n()});Q.append(O)}function h(P,Q,O,M){var N=x('<img id="'+A.prefix+"img-"+O+"-"+M+'" class="'+A.prefix+'img">');r(C,N);N.attr("data-src",Q);P.append(N);return N}function k(R,O){var P=parseInt(O[0]["naturalWidth"])+2*A.borderSize;var M=parseInt(O[0]["naturalHeight"])+2*A.borderSize;if(P===0||M===0){return{left:(a-p)/2,top:(v-p)/2}}var Q=P;var N=M;if(P/M>a/v){if(P>a){Q=p;N=p*M/P}}else{if(M>v){N=K;Q=K*P/M}}R.css("width",Math.round(Q)+"px");R.css("height",Math.round(N)+"px");return{left:(a-Q)/2,top:(v-N)/2}}function c(){if(!A.showLoader){return}q.animate({opacity:1},{duration:A.fadeDuration,queue:false});(function M(){q.animate({rotation:"+=360"},{duration:1000,easing:"linear",queue:false,step:function(N){var P=N%360;var O="rotate("+P+"deg)";q.css({"-webkit-transform":O,"-ms-transform":O,transform:O})},complete:M})})()}function i(){if(!A.showLoader){return}q.animate({opacity:0},{duration:A.fadeDuration,queue:false,complete:function(){q.stop()}})}function n(){i();if(e){e.fadeOut(A.fadeDuration,function(){var M=e.find("."+A.prefix+"img");M.hide();M.removeClass(A.prefix+"active");e.stop();e=false})}B.fadeOut(A.fadeDuration,function(){if(!A.scrollBars){w.css("overflow",I)}});if(typeof A.onClose==="function"){A.onClose()}}function E(Q){Q.preventDefault();var O=x(this).attr("data-cont");var M=x(this).attr("data-img");var P=e=x("#"+A.prefix+"cont-"+O);var N=x("#"+A.prefix+"img-"+O+"-"+M);var R=N.attr("data-src");N.off("load").on("load",function(){if(typeof A.onImageLoaded==="function"){A.onImageLoaded(R)}var S=k(P,N);P.css("left",Math.round(S.left)+"px");P.css("top",Math.round(S.top)+"px");N.show();i();P.fadeIn(A.fadeDuration,function(){N.addClass(A.prefix+"active");if(typeof A.onImageShowed==="function"){A.onImageShowed(R)}})});if(!A.scrollBars){w.css("overflow","hidden")}c();B.fadeIn(A.fadeDuration,function(){N.attr("src",R)});if(typeof A.onClickLink==="function"){A.onClickLink(O,M,R)}}function d(){if(!e){return}var M=e.find("."+A.prefix+"active");if(M.length===0){return}var N=M.prev("."+A.prefix+"img");if(N.length===0){return}var O=N.attr("data-src");N.off("load").on("load",function(){if(typeof A.onImageLoaded==="function"){A.onImageLoaded(O)}if(A.fadeWhenMove){e.animate({opacity:0},{duration:A.fadeDuration,queue:false})}e.animate({left:a+"px"},{duration:A.moveDuration,queue:false,complete:function(){e.css("left",-a+"px");M.hide();N.show();var Q=k(e,N);e.css("top",Math.round(Q.top)+"px");i();if(A.fadeWhenMove){var P=0;if(A.moveDuration>A.fadeDuration){P=A.moveDuration-A.fadeDuration}setTimeout(function(){e.animate({opacity:1},{duration:A.fadeDuration,queue:false})},P)}e.animate({left:Math.round(Q.left)+"px"},{duration:A.moveDuration,queue:false,complete:function(){M.removeClass(A.prefix+"active");N.addClass(A.prefix+"active");if(typeof A.onImageShowed==="function"){A.onImageShowed(O)}}})}})});c();N.attr("src",O);if(typeof A.onClickPrev==="function"){A.onClickPrev(O)}}function y(){if(!e){return}var M=e.find("."+A.prefix+"active");if(M.length===0){return}var N=M.next("."+A.prefix+"img");if(N.length===0){return}var O=N.attr("data-src");N.off("load").on("load",function(){if(typeof A.onImageLoaded==="function"){A.onImageLoaded(O)}if(A.fadeWhenMove){e.animate({opacity:0},{duration:A.fadeDuration,queue:false})}e.animate({left:-a+"px"},{duration:A.moveDuration,queue:false,complete:function(){e.css("left",a+"px");M.hide();N.show();var Q=k(e,N);e.css("top",Math.round(Q.top)+"px");i();if(A.fadeWhenMove){var P=0;if(A.moveDuration>A.fadeDuration){P=A.moveDuration-A.fadeDuration}setTimeout(function(){e.animate({opacity:1},{duration:A.fadeDuration,queue:false})},P)}e.animate({left:Math.round(Q.left)+"px"},{duration:A.moveDuration,queue:false,complete:function(){M.removeClass(A.prefix+"active");N.addClass(A.prefix+"active");if(typeof A.onImageShowed==="function"){A.onImageShowed(O)}}})}})});c();N.attr("src",O);if(typeof A.onClickNext==="function"){A.onClickNext(O)}}function u(N){function M(P){if(typeof A.onLazyLoadingStart==="function"){A.onLazyLoadingStart()}if(P>=N.length){if(typeof A.onLazyLoadingEnd==="function"){A.onLazyLoadingEnd()}return}var O=new Image();O.onload=function(){setTimeout(M,A.lazyLoadingDelay,P+1)};O.src=N[P]}setTimeout(M,A.lazyLoadingDelay,0)}window[g]={count:0};x.fn.frydBox=function(O){x.extend(A,O);s.background="rgba(0,0,0,"+A.backOpacity+")";if(typeof A.prevImage==="undefined"){A.prevImage=G+"prev.png"}if(A.prevImage!==false){t.background="url("+A.prevImage+") "+t.background}if(typeof A.nextImage==="undefined"){A.nextImage=G+"next.png"}if(A.nextImage!==false){b.background="url("+A.nextImage+") "+b.background}if(typeof A.closeImage==="undefined"){A.closeImage=G+"close.png"}if(A.closeImage!==false){L.background="url("+A.closeImage+") "+L.background}C.border=A.borderSize+"px solid "+A.borderColor;C["border-radius"]=A.borderRadius+"px";C["box-shadow"]="0 0 "+A.shadowSize+"px rgba(0,0,0,"+A.shadowOpacity+")";if(window[g].count===0){F()}var P=J(window[g].count);o(P,window[g].count);var N=0;var Q=[];var M=x(this).each(function(){var R=x(this).attr("href");Q.push(R);var S=h(P,R,window[g].count,N);x(this).attr("data-cont",window[g].count);x(this).attr("data-img",N);x(this).off("click").on("click",E);++N});if(A.lazyLoading){if(document.readyState==="complete"){u(Q)}else{x(window).on("load",function(){u(Q)})}}++window[g].count;return M}}(jQuery));
