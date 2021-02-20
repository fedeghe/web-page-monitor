/*!
 * web-page-monitor 0.0.1
 * fedeghe <fedeghe@gmail.com>
 */(()=>{"use strict";var t={175:(n,e,t)=>{t.d(e,{Z:()=>o});e=t(645),e=t.n(e)()(function(n){return n[1]});e.push([n.id,'body {\n  height: 50000px;\n  background-image: url("https://www.w3schools.com/images/colorpicker.gif");\n  background-repeat: repeat;\n}\nbody #add {\n  margin: 10px;\n  padding: 10px;\n  font-size: 2em;\n  text-transform: uppercase;\n}\n.monitor-panel {\n  pointer-events: none;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 150px;\n  min-height: 100px;\n  /* border:3px dotted white; */\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 5px;\n  padding-bottom: 0px;\n  border-top-left-radius: 6px;\n  font-family: verdana;\n  font-size: 0.8em;\n  display: flex;\n  flex-direction: column;\n}\n.monitor-canvas {\n  width: 200px;\n  height: 100px;\n}\n.x-panel {\n  border-radius: 3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  color: greenyellow;\n}\n.high-panel {\n  background-color: #220000;\n  height: 150px;\n}\n.mid-panel {\n  background-color: #002200;\n  height: 100px;\n}\n.small-panel {\n  background-color: #000022;\n  height: 50px;\n}\n',""]);const o=e},645:n=>{n.exports=function(t){var c=[];return c.toString=function(){return this.map(function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e}).join("")},c.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),c.push(s))}},c}},379:(n,e,r)=>{var t,o,s=function(){return t=void 0===t?Boolean(window&&document&&document.all&&!window.atob):t},i=(o={},function(n){if(void 0===o[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}o[n]=e}return o[n]}),l=[];function d(n){for(var e=-1,t=0;t<l.length;t++)if(l[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s=t[a]||0,c="".concat(a," ").concat(s);t[a]=s+1;s=d(c),i={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(l[s].references++,l[s].updater(i)):l.push({identifier:c,updater:function(e,n){var t,o,r;{var i;r=n.singleton?(i=m++,t=h=h||u(n),o=f.bind(null,t,i,!1),f.bind(null,t,i,!0)):(t=u(n),o=function(n,e,t){var o=t.css,r=t.media,t=t.sourceMap;r?n.setAttribute("media",r):n.removeAttribute("media");t&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */"));if(n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}.bind(null,t,n),function(){var n;null!==(n=t).parentNode&&n.parentNode.removeChild(n)})}return o(e),function(n){n?n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap||o(e=n):r()}}(i,e),references:1}),o.push(c)}return o}function u(n){var e,t=document.createElement("style"),o=n.attributes||{};if(void 0!==o.nonce||(e=r.nc)&&(o.nonce=e),Object.keys(o).forEach(function(n){t.setAttribute(n,o[n])}),"function"==typeof n.insert)n.insert(t);else{n=i(n.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var a,p=(a=[],function(n,e){return a[n]=e,a.filter(Boolean).join("\n")});function f(n,e,t,o){t=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;n.styleSheet?n.styleSheet.cssText=p(e,t):(o=document.createTextNode(t),(t=n.childNodes)[e]&&n.removeChild(t[e]),t.length?n.insertBefore(o,t[e]):n.appendChild(o))}var h=null,m=0;n.exports=function(n,i){(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=s());var a=c(n=n||[],i);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<a.length;e++){var t=d(a[e]);l[t].references--}for(var n=c(n,i),o=0;o<a.length;o++){var r=d(a[o]);0===l[r].references&&(l[r].updater(),l.splice(r,1))}a=n}}}}},o={};function b(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return t[n](e,e.exports,b),e.exports}b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),b.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var w={};(()=>{function n(){this.appended=!1}function e(n,t){function e(){}e.prototype=t.prototype,n.prototype=new e,(n.prototype.constructor=n).superClass=t.prototype,n.baseConstructor=t,n.super=function(n){var e=[].slice.call(arguments,1);t.apply(n,e)}}function a(n,e){var t,o=1<arguments.length&&void 0!==e?e:{},r=o.className,i=void 0!==r&&r,a=o.text,e=void 0!==a&&a,r=o.html,a=void 0!==r&&r,r=o.attributes,s=void 0===r?{}:r,o=o.childs,o=void 0===o?[]:o,c=document.createElement(n);for(t in i&&(c.className=i),e&&(c.innerText=e),a&&(c.innerHTML=a),o.length&&l(c,o),s)c.setAttribute(t,s[t]);return c}function l(e,n){n.forEach(function(n){e.appendChild(n)})}function t(){this.panel=a("div",{className:"high-panel x-panel",text:"FPSmonitor"});var t,o=a("span"),r=[];l(this.panel,[o]),function e(){window.requestAnimationFrame(function(){for(var n=performance.now();0<r.length&&r[0]<=n-1e3;)r.shift();r.push(n),t=r.length,o.innerHTML=t,e()})}()}b.r(w),n.prototype.render=function(n){this.appended=!0,n.appendChild(this.panel)},e(t,y=n);const o=t;function r(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.panel=a("div",{className:"small-panel x-panel"});var e=a("span",{text:"TAGSmonitor: "}),t=a("span"),o=a("canvas",{attributes:{width:50,height:25}});l(this.panel,[e,t,o]),setInterval(function(){var n=document.getElementsByTagName("*").length;t.innerHTML=n},n.frequency?1e3/n.frequency:1e3)}e(r,y);const i=r;function s(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.panel=a("div",{className:"mid-panel x-panel",text:"MEMmonitor"});var e=a("li"),t=a("li"),o=a("li"),r=a("ul"),i=Math.pow(2,20);l(r,[e,t,o]),l(this.panel,[r]),setInterval(function(){e.innerHTML=(performance.memory.totalJSHeapSize/i).toFixed(2)+"MB",t.innerHTML=(performance.memory.usedJSHeapSize/i).toFixed(2)+"MB",o.innerHTML=(performance.memory.jsHeapSizeLimit/i).toFixed(2)+"MB"},n.frequency?1e3/n.frequency:1e3)}e(s,y);const c=s;function d(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=this;this.max=0,this.events=[],this.options=n,this.panel=a("div",{className:"small-panel x-panel"}),this.$title=a("span",{text:"EVENTSmonitor"}),this.$num=a("span"),l(this.panel,[this.$title,this.$num]),this.listen(),setInterval(function(){var n=e.events.length;e.max=Math.max(e.max,n),e.$num.innerHTML=" (".concat(n," | max:").concat(e.max,")"),e.events=[]},n.frequency?1e3/n.frequency:1e3)}e(d,y),d.prototype.add=function(n){this.events.push(n)},d.prototype.listen=function(){var e=this,n=Object.keys(window).reduce(function(n,e){return/^on/.test(e)&&n.push(e),n},[]);console.log(n.join(",")),Object.keys(window).forEach(function(n){/^on/.test(n)&&(!e.options.exclude||e.options.exclude.indexOf(n)<0)&&window.addEventListener(n.slice(2),function(n){e.add(n)},!0)})};const u=d,p=function(n,e){switch(n){case"fps":return new o(e);case"mem":return new c(e);case"tags":return new i(e);case"events":return console.log("options2",e),new u(e);default:return null}};function f(){this.container=document.createElement("div"),this.container.className="monitor-panel",this.panels=[]}f.prototype.addPanel=function(n,e){return this.panels.push(p(n,e)),this},f.prototype.render=function(n){this.container.innerHTML="";var e=this;this.panels.forEach(function(n){n.render(e.container)}),n.appendChild(this.container)};const h=f;var m,v,g=b(379),x=b.n(g),y=b(175),g={insert:"head",singleton:!1};x()(y.Z,g),y.Z.locals,window.Monitor=(m=new h,v={showFPS:function(n){return m.addPanel("fps",n),v},showMEM:function(n){return m.addPanel("mem",n),v},showTAGS:function(n){return m.addPanel("tags",n),v},showEVENTS:function(n){return m.addPanel("events",n),v},render:function(){return m.render(document.body)}})})(),module.exports=w})();