!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}System.register(["./index-legacy-052b3898.js","./init-cc95ec8e-legacy-2d87855a.js"],(function(t,r){"use strict";var e,i,o,a,u,c;return{setters:[function(n){e=n.bb,i=n.bc,o=n.bd,a=n.be,u=n.bf},function(n){c=n.i}],execute:function(){function r(n,t){return null==n||null==t?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function f(n,t){return null==n||null==t?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function l(n){var t,e,i;function o(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length;if(i<o){if(0!==t(r,r))return o;do{var a=i+o>>>1;e(n[a],r)<0?i=a+1:o=a}while(i<o)}return i}return 2!==n.length?(t=r,e=function(t,e){return r(n(t),e)},i=function(t,r){return n(t)-r}):(t=n===r||n===f?n:s,e=n,i=n),{left:o,center:function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=o(n,t,r,(arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length)-1);return e>r&&i(n[e-1],t)>-i(n[e],t)?e-1:e},right:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length;if(i<o){if(0!==t(r,r))return o;do{var a=i+o>>>1;e(n[a],r)<=0?i=a+1:o=a}while(i<o)}return i}}}function s(){return 0}t({a:Z,b:l,c:I,l:function n(){var t=I();return t.copy=function(){return Z(t,n())},c.apply(t,arguments),K(t)},t:d});var h=l(r).right;l((function(n){return null===n?NaN:+n})).center;var g=h,v=Math.sqrt(50),m=Math.sqrt(10),p=Math.sqrt(2);function M(n,t,r){var e=(t-n)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,i);return i>=0?(o>=v?10:o>=m?5:o>=p?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=v?10:o>=m?5:o>=p?2:1)}function d(n,t,r){var e=Math.abs(t-n)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/i;return o>=v?i*=10:o>=m?i*=5:o>=p&&(i*=2),t<n?-i:i}function y(n,t){t||(t=[]);var r,e=n?Math.min(t.length,n.length):0,i=t.slice();return function(o){for(r=0;r<e;++r)i[r]=n[r]*(1-o)+t[r]*o;return i}}function b(n,t){var r,e=t?t.length:0,i=n?Math.min(e,n.length):0,o=new Array(i),a=new Array(e);for(r=0;r<i;++r)o[r]=x(n[r],t[r]);for(;r<e;++r)a[r]=t[r];return function(n){for(r=0;r<i;++r)a[r]=o[r](n);return a}}function w(n,t){var r=new Date;return n=+n,t=+t,function(e){return r.setTime(n*(1-e)+t*e),r}}function N(t,r){var e,i={},o={};for(e in null!==t&&"object"===n(t)||(t={}),null!==r&&"object"===n(r)||(r={}),r)e in t?i[e]=x(t[e],r[e]):o[e]=r[e];return function(n){for(e in i)o[e]=i[e](n);return o}}function x(t,r){var c,f,l=n(r);return null==r||"boolean"===l?i(r):("number"===l?e:"string"===l?(c=o(r))?(r=c,a):u:r instanceof o?a:r instanceof Date?w:(f=r,!ArrayBuffer.isView(f)||f instanceof DataView?Array.isArray(r)?b:"function"!=typeof r.valueOf&&"function"!=typeof r.toString||isNaN(r)?N:e:y))(t,r)}function A(n,t){return n=+n,t=+t,function(r){return Math.round(n*(1-r)+t*r)}}function S(n,t){if((r=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var r,e=n.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+n.slice(r+1)]}function k(n){return(n=S(Math.abs(n)))?n[1]:NaN}var j,z=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function E(n){if(!(t=z.exec(n)))throw new Error("invalid format: "+n);var t;return new F({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function F(n){this.fill=void 0===n.fill?" ":n.fill+"",this.align=void 0===n.align?">":n.align+"",this.sign=void 0===n.sign?"-":n.sign+"",this.symbol=void 0===n.symbol?"":n.symbol+"",this.zero=!!n.zero,this.width=void 0===n.width?void 0:+n.width,this.comma=!!n.comma,this.precision=void 0===n.precision?void 0:+n.precision,this.trim=!!n.trim,this.type=void 0===n.type?"":n.type+""}function $(n,t){var r=S(n,t);if(!r)return n+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}E.prototype=F.prototype,F.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var L={"%":function(n,t){return(100*n).toFixed(t)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:function(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},g:function(n,t){return n.toPrecision(t)},o:function(n){return Math.round(n).toString(8)},p:function(n,t){return $(100*n,t)},r:$,s:function(n,t){var r=S(n,t);if(!r)return n+"";var e=r[0],i=r[1],o=i-(j=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=e.length;return o===a?e:o>a?e+new Array(o-a+1).join("0"):o>0?e.slice(0,o)+"."+e.slice(o):"0."+new Array(1-o).join("0")+S(n,Math.max(0,t+o-1))[0]},X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}};function P(n){return n}var q,C,D,O=Array.prototype.map,T=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function V(n){var t,r,e=void 0===n.grouping||void 0===n.thousands?P:(t=O.call(n.grouping,Number),r=n.thousands+"",function(n,e){for(var i=n.length,o=[],a=0,u=t[0],c=0;i>0&&u>0&&(c+u+1>e&&(u=Math.max(1,e-c)),o.push(n.substring(i-=u,i+u)),!((c+=u+1)>e));)u=t[a=(a+1)%t.length];return o.reverse().join(r)}),i=void 0===n.currency?"":n.currency[0]+"",o=void 0===n.currency?"":n.currency[1]+"",a=void 0===n.decimal?".":n.decimal+"",u=void 0===n.numerals?P:function(n){return function(t){return t.replace(/[0-9]/g,(function(t){return n[+t]}))}}(O.call(n.numerals,String)),c=void 0===n.percent?"%":n.percent+"",f=void 0===n.minus?"−":n.minus+"",l=void 0===n.nan?"NaN":n.nan+"";function s(n){var t=(n=E(n)).fill,r=n.align,s=n.sign,h=n.symbol,g=n.zero,v=n.width,m=n.comma,p=n.precision,M=n.trim,d=n.type;"n"===d?(m=!0,d="g"):L[d]||(void 0===p&&(p=12),M=!0,d="g"),(g||"0"===t&&"="===r)&&(g=!0,t="0",r="=");var y="$"===h?i:"#"===h&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",b="$"===h?o:/[%p]/.test(d)?c:"",w=L[d],N=/[defgprs%]/.test(d);function x(n){var i,o,c,h=y,x=b;if("c"===d)x=w(n)+x,n="";else{var A=(n=+n)<0||1/n<0;if(n=isNaN(n)?l:w(Math.abs(n),p),M&&(n=function(n){n:for(var t,r=n.length,e=1,i=-1;e<r;++e)switch(n[e]){case".":i=t=e;break;case"0":0===i&&(i=e),t=e;break;default:if(!+n[e])break n;i>0&&(i=0)}return i>0?n.slice(0,i)+n.slice(t+1):n}(n)),A&&0==+n&&"+"!==s&&(A=!1),h=(A?"("===s?s:f:"-"===s||"("===s?"":s)+h,x=("s"===d?T[8+j/3]:"")+x+(A&&"("===s?")":""),N)for(i=-1,o=n.length;++i<o;)if(48>(c=n.charCodeAt(i))||c>57){x=(46===c?a+n.slice(i+1):n.slice(i))+x,n=n.slice(0,i);break}}m&&!g&&(n=e(n,1/0));var S=h.length+n.length+x.length,k=S<v?new Array(v-S+1).join(t):"";switch(m&&g&&(n=e(k+n,k.length?v-x.length:1/0),k=""),r){case"<":n=h+n+x+k;break;case"=":n=h+k+n+x;break;case"^":n=k.slice(0,S=k.length>>1)+h+n+x+k.slice(S);break;default:n=k+h+n+x}return u(n)}return p=void 0===p?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),x.toString=function(){return n+""},x}return{format:s,formatPrefix:function(n,t){var r=s(((n=E(n)).type="f",n)),e=3*Math.max(-8,Math.min(8,Math.floor(k(t)/3))),i=Math.pow(10,-e),o=T[8+e/3];return function(n){return r(i*n)+o}}}}function X(n){return+n}q=V({thousands:",",grouping:[3],currency:["$",""]}),C=q.format,D=q.formatPrefix;var B=[0,1];function G(n){return n}function R(n,t){return(t-=n=+n)?function(r){return(r-n)/t}:(r=isNaN(t)?NaN:.5,function(){return r});var r}function U(n,t,r){var e=n[0],i=n[1],o=t[0],a=t[1];return i<e?(e=R(i,e),o=r(a,o)):(e=R(e,i),o=r(o,a)),function(n){return o(e(n))}}function Y(n,t,r){var e=Math.min(n.length,t.length)-1,i=new Array(e),o=new Array(e),a=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<e;)i[a]=R(n[a],n[a+1]),o[a]=r(t[a],t[a+1]);return function(t){var r=g(n,t,1,e)-1;return o[r](i[r](t))}}function Z(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function H(){var n,t,r,i,o,a,u=B,c=B,f=x,l=G;function s(){var n,t,r,e=Math.min(u.length,c.length);return l!==G&&(n=u[0],t=u[e-1],n>t&&(r=n,n=t,t=r),l=function(r){return Math.max(n,Math.min(t,r))}),i=e>2?Y:U,o=a=null,h}function h(t){return null==t||isNaN(t=+t)?r:(o||(o=i(u.map(n),c,f)))(n(l(t)))}return h.invert=function(r){return l(t((a||(a=i(c,u.map(n),e)))(r)))},h.domain=function(n){return arguments.length?(u=Array.from(n,X),s()):u.slice()},h.range=function(n){return arguments.length?(c=Array.from(n),s()):c.slice()},h.rangeRound=function(n){return c=Array.from(n),f=A,s()},h.clamp=function(n){return arguments.length?(l=!!n||G,s()):l!==G},h.interpolate=function(n){return arguments.length?(f=n,s()):f},h.unknown=function(n){return arguments.length?(r=n,h):r},function(r,e){return n=r,t=e,s()}}function I(){return H()(G,G)}function J(n,t,r,e){var i,o=d(n,t,r);switch((e=E(null==e?",f":e)).type){case"s":var a=Math.max(Math.abs(n),Math.abs(t));return null!=e.precision||isNaN(i=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(k(t)/3)))-k(Math.abs(n)))}(o,a))||(e.precision=i),D(e,a);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,k(t)-k(n))+1}(o,Math.max(Math.abs(n),Math.abs(t))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=function(n){return Math.max(0,-k(Math.abs(n)))}(o))||(e.precision=i-2*("%"===e.type))}return C(e)}function K(n){var t=n.domain;return n.ticks=function(n){var r=t();return function(n,t,r){var e,i,o,a,u=-1;if(r=+r,(n=+n)==(t=+t)&&r>0)return[n];if((e=t<n)&&(i=n,n=t,t=i),0===(a=M(n,t,r))||!isFinite(a))return[];if(a>0){var c=Math.round(n/a),f=Math.round(t/a);for(c*a<n&&++c,f*a>t&&--f,o=new Array(i=f-c+1);++u<i;)o[u]=(c+u)*a}else{a=-a;var l=Math.round(n*a),s=Math.round(t*a);for(l/a<n&&++l,s/a>t&&--s,o=new Array(i=s-l+1);++u<i;)o[u]=(l+u)/a}return e&&o.reverse(),o}(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var e=t();return J(e[0],e[e.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var e,i,o=t(),a=0,u=o.length-1,c=o[a],f=o[u],l=10;for(f<c&&(i=c,c=f,f=i,i=a,a=u,u=i);l-- >0;){if((i=M(c,f,r))===e)return o[a]=c,o[u]=f,t(o);if(i>0)c=Math.floor(c/i)*i,f=Math.ceil(f/i)*i;else{if(!(i<0))break;c=Math.ceil(c*i)/i,f=Math.floor(f*i)/i}e=i}return n},n}}}}))}();