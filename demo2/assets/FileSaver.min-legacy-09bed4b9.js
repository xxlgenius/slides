!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register([],(function(t,n){"use strict";return{execute:function(){function n(e,t){for(var n=function(){var n=t[o];if("string"!=typeof n&&!Array.isArray(n)){var r=function(t){if("default"!==t&&!(t in e)){var o=Object.getOwnPropertyDescriptor(n,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:function(){return n[t]}})}};for(var i in n)r(i)}},o=0;o<t.length;o++)n();return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var i={exports:{}};!function(t,n){!function(){function n(t,n){return void 0===n?n={autoBom:!1}:"object"!=e(n)&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function r(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var f="object"==("undefined"==typeof window?"undefined":e(window))&&window.window===window?window:"object"==("undefined"==typeof self?"undefined":e(self))&&self.self===self?self:"object"==e(o)&&o.global===o?o:void 0,u=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=f.saveAs||("object"!=("undefined"==typeof window?"undefined":e(window))||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!u?function(e,t,n){var o=f.URL||f.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?a(u):i(u.href)?r(e,t,n):a(u,u.target="_blank")):(u.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(u.href)}),4e4),setTimeout((function(){a(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,t,o){if(t=t||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(n(e,o),t);else if(i(e))r(e,t,o);else{var f=document.createElement("a");f.href=e,f.target="_blank",setTimeout((function(){a(f)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,a=/constructor/i.test(f.HTMLElement)||f.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&a||u)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var s=f.URL||f.webkitURL,d=s.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){s.revokeObjectURL(d)}),4e4)}});f.saveAs=c.saveAs=c,t.exports=c}()}(i);var a=i.exports;t("F",n({__proto__:null,default:r(a)},[a]))}}}))}();
