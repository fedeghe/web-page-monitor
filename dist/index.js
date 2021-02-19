(()=>{"use strict";var t={175:(e,n,t)=>{t.d(n,{Z:()=>r});n=t(645),n=t.n(n)()(function(e){return e[1]});n.push([e.id,'body {\n  height: 50000px;\n  background-image: url("https://www.w3schools.com/images/colorpicker.gif");\n  background-repeat: repeat;\n}\n.monitor-panel {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 200px;\n  min-height: 100px;\n  /* border:3px dotted white; */\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 5px;\n  padding-bottom: 0px;\n  border-top-left-radius: 6px;\n  font-family: verdana;\n}\n.monitor-canvas {\n  width: 200px;\n  height: 100px;\n}\n.x-panel {\n  border-radius: 3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  color: greenyellow;\n}\n.high-panel {\n  background-color: #220000;\n  height: 150px;\n}\n.mid-panel {\n  background-color: #002200;\n  height: 100px;\n}\n.small-panel {\n  background-color: #000022;\n  height: 50px;\n}\n',""]);const r=n},645:e=>{e.exports=function(t){var s=[];return s.toString=function(){return this.map(function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n}).join("")},s.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);t&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),s.push(c))}},s}},379:(e,n,o)=>{var t,r,c=function(){return t=void 0===t?Boolean(window&&document&&document.all&&!window.atob):t},a=(r={},function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}),l=[];function d(e){for(var n=-1,t=0;t<l.length;t++)if(l[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],c=t[i]||0,s="".concat(i," ").concat(c);t[i]=c+1;c=d(s),a={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(l[c].references++,l[c].updater(a)):l.push({identifier:s,updater:function(n,e){var t,r,o;{var a;o=e.singleton?(a=m++,t=f=f||p(e),r=h.bind(null,t,a,!1),h.bind(null,t,a,!0)):(t=p(e),r=function(e,n,t){var r=t.css,o=t.media,t=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media");t&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */"));if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,e),function(){var e;null!==(e=t).parentNode&&e.parentNode.removeChild(e)})}return r(n),function(e){e?e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap||r(n=e):o()}}(a,n),references:1}),r.push(s)}return r}function p(e){var n,t=document.createElement("style"),r=e.attributes||{};if(void 0!==r.nonce||(n=o.nc)&&(r.nonce=n),Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(t);else{e=a(e.insert||"head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}return t}var i,u=(i=[],function(e,n){return i[e]=n,i.filter(Boolean).join("\n")});function h(e,n,t,r){t=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;e.styleSheet?e.styleSheet.cssText=u(n,t):(r=document.createTextNode(t),(t=e.childNodes)[n]&&e.removeChild(t[n]),t.length?e.insertBefore(r,t[n]):e.appendChild(r))}var f=null,m=0;e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=c());var i=s(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var t=d(i[n]);l[t].references--}for(var e=s(e,a),r=0;r<i.length;r++){var o=d(i[r]);0===l[o].references&&(l[o].updater(),l.splice(o,1))}i=e}}}}},r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={id:e,exports:{}};return t[e](n,n.exports,o),n.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{o.r(a);var e=o(379),n=o.n(e),t=o(175),e={insert:"head",singleton:!1};n()(t.Z,e),t.Z.locals,window.Monitor=function(){function e(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n,(e.prototype.constructor=e).superClass=t.prototype,e.baseConstructor=t,e.super=function(e){var n=[].slice.call(arguments,1);t.apply(e,n)}}var n=function(e){switch(e){case"fps":return new o;case"mem":return new a;case"tags":return new i}};function t(){this.container=document.createElement("div"),this.container.className="monitor-panel",this.panels=[]}function r(){this.appended=!1}function o(){this.panel=document.createElement("div"),this.panel.className="high-panel x-panel",this.panel.innerHTML="FPSmonitor"}function a(){this.panel=document.createElement("div"),this.panel.className="mid-panel x-panel",this.panel.innerHTML="MEMmonitor"}function i(){this.panel=document.createElement("div"),this.panel.className="small-panel x-panel";var e=document.createElement("span");e.innerHTML="TAGSmonitor: ";var n=document.createElement("span");this.panel.appendChild(e),this.panel.appendChild(n),setInterval(function(){var e=document.getElementsByTagName("*").length;n.innerHTML=e},500)}t.prototype.addPanel=function(e){this.panels.push(n(e))},t.prototype.render=function(e){this.container.innerHTML="";var n=this;this.panels.forEach(function(e){e.render(n.container)}),e.appendChild(this.container)},r.prototype.render=function(e){this.appended=!0,e.appendChild(this.panel)},e(o,r),e(a,r),e(i,r);var c=new t;return{showFPS:function(){c.addPanel("fps")},showMEM:function(){c.addPanel("mem")},showTAGS:function(){c.addPanel("tags")},render:function(){c.render(document.body)}}}()})(),module.exports=a})();