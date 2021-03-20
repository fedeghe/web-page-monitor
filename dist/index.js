/*!
 * web-page-monitor 0.0.11
 * fedeghe <fedeghe@gmail.com>
 */(()=>{"use strict";var n={175:(t,e,n)=>{n.d(e,{Z:()=>i});e=n(645),e=n.n(e)()(function(t){return t[1]});e.push([t.id,".monitor-panel-hidden {\n  position: fixed;\n  bottom: 1px;\n  right: 0px;\n  font-family: monospace;\n}\n.monitor-panel-hidden .x-panel {\n  display: none;\n}\n.monitor-panel-hidden .monitor-panel-toggler-hidden {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 0px;\n  bottom: 8px;\n}\n.monitor-panel-hidden .monitor-panel-toggler-hidden::after {\n  content: '◤';\n  color: green;\n  cursor: pointer;\n}\n.monitor-panel {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 150px;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 5px;\n  padding-bottom: 0px;\n  border-top-left-radius: 6px;\n  font-family: monospace;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.6em;\n  box-sizing: initial;\n}\n.monitor-panel .x-panel {\n  border-radius: 3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  color: greenyellow;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.monitor-panel .MEMmonitor ul {\n  padding: 0;\n  margin: 0;\n}\n.monitor-panel ul {\n  list-style: none;\n}\n.monitor-panel .title {\n  margin-bottom: 5px;\n  display: inline-block;\n  font-weight: bold;\n}\n.monitor-panel .flexi {\n  display: flex;\n  justify-content: space-between;\n}\n.monitor-panel .monitor-panel-toggler {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 0px;\n  bottom: 5px;\n}\n.monitor-panel .monitor-panel-toggler::after {\n  content: '◢';\n  font-size: 2em;\n  color: red;\n  cursor: pointer;\n}\n",""]);const i=e},645:t=>{t.exports=function(n){var l=[];return l.toString=function(){return this.map(function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},l.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);n&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),l.push(s))}},l}},379:(t,e,o)=>{var n,i,s=function(){return n=void 0===n?Boolean(window&&document&&document.all&&!window.atob):n},a=(i={},function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),c=[];function d(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],o=0;o<t.length;o++){var a=t[o],r=e.base?a[0]+e.base:a[0],s=n[r]||0,l="".concat(r," ").concat(s);n[r]=s+1;s=d(l),a={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(c[s].references++,c[s].updater(a)):c.push({identifier:l,updater:function(e,t){var n,i,o;{var a;o=t.singleton?(a=f++,n=m=m||h(t),i=u.bind(null,n,a,!1),u.bind(null,n,a,!0)):(n=h(t),i=function(t,e,n){var i=n.css,o=n.media,n=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media");n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */"));if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,t),function(){var t;null!==(t=n).parentNode&&t.parentNode.removeChild(t)})}return i(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||i(e=t):o()}}(a,e),references:1}),i.push(l)}return i}function h(t){var e,n=document.createElement("style"),i=t.attributes||{};if(void 0!==i.nonce||(e=o.nc)&&(i.nonce=e),Object.keys(i).forEach(function(t){n.setAttribute(t,i[t])}),"function"==typeof t.insert)t.insert(n);else{t=a(t.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}return n}var r,p=(r=[],function(t,e){return r[t]=e,r.filter(Boolean).join("\n")});function u(t,e,n,i){n=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;t.styleSheet?t.styleSheet.cssText=p(e,n):(i=document.createTextNode(n),(n=t.childNodes)[e]&&t.removeChild(n[e]),n.length?t.insertBefore(i,n[e]):t.appendChild(i))}var m=null,f=0;t.exports=function(t,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=s());var r=l(t=t||[],a);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<r.length;e++){var n=d(r[e]);c[n].references--}for(var t=l(t,a),i=0;i<r.length;i++){var o=d(r[i]);0===c[o].references&&(c[o].updater(),c.splice(o,1))}r=t}}}}},i={};function N(t){if(i[t])return i[t].exports;var e=i[t]={id:t,exports:{}};return n[t](e,e.exports,N),e.exports}N.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return N.d(e,{a:e}),e},N.d=(t,e)=>{for(var n in e)N.o(e,n)&&!N.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},N.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),N.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var E={};(()=>{function t(){this.appended=!1}N.r(E),t.prototype.render=function(t){this.appended=!0,t.appendChild(this.$panel)};var e=t;function n(t,n){function e(){}e.prototype=n.prototype,t.prototype=new e,(t.prototype.constructor=t).superClass=n.prototype,t.baseConstructor=n,t.super=function(t){var e=[].slice.call(arguments,1);n.apply(t,e)}}function p(t,e){var n,i=1<arguments.length&&void 0!==e?e:{},o=i.className,a=void 0!==o&&o,r=i.text,e=void 0!==r&&r,o=i.html,r=void 0!==o&&o,o=i.attributes,s=void 0===o?{}:o,i=i.childs,i=void 0===i?[]:i,l=document.createElement(t);for(n in a&&(l.className=a),e&&(l.innerText=e),r&&(l.innerHTML=r),i.length&&u(l,i),s)l.setAttribute(n,s[n]);return l}function u(e,t){t.forEach(function(t){e.appendChild(t)})}function i(t){var e=t.width,n=t.height,t=t.options;this.width=e,this.height=n,this.options=t,this.tag=p("canvas",{attributes:{width:e,height:n}}),this.ctx=this.tag.getContext("2d"),this.ctx.fillStyle="black",this.ctx.strokeStyle="#00FF00",this.data=[],this.normalized=[],this.max=0}i.prototype.clear=function(){this.ctx.fillRect(0,0,this.width,this.height)},i.prototype.normalize=function(t){return this.max?t*this.height/this.max:this.height},i.prototype.add=function(t){this.data.push(t);var e=this.normalize(t),n=this.data.reduce(function(t,e){return e<t?t:e},0),t=this.data.length>this.width?1:0;this.data=this.data.slice(t),n!==this.max?(this.normalized=this.data.map(this.normalize.bind(this)),this.max=n):this.normalized.push(e),this.normalized=this.normalized.slice(t),this.render()},i.prototype.getTag=function(){return this.tag},i.prototype.render=function(){var n=this;this.clear(),this.normalized.forEach(function(t,e){n.ctx.beginPath(),n.ctx.strokeStyle=n.options.color||"rgba(0,256,0, 0.5)",n.ctx.moveTo(e,n.height),n.ctx.lineTo(e,n.height-t),n.ctx.stroke()})};const m=i;function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=p("div",{className:"x-panel"});var i,e=p("span",{text:"FPS",className:"title"}),o=p("span"),a=new m({width:140,height:t.height||50,options:t}),r=[];u(this.$panel,[e,o,a.getTag()]),function n(){window.requestAnimationFrame(function(){for(var t=performance.now();0<r.length&&r[0]<=t-1e3;)r.shift();r.push(t);var e=r.length;i=60<e?60:e,o.innerHTML=": ".concat(i," fps"),a.add(i),n()})}()}n(o,e);const a=o;function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;this.$panel=p("div",{className:"x-panel"});var e=p("div",{text:"TAGS: ",className:"title"}),a=p("span"),n=p("div",{className:"flexi"}),r=p("div"),s=p("div"),l=new m({width:140,height:t.height||50,options:t}),c=document.body.clientHeight*document.body.clientWidth,d=document.getElementsByTagName("*"),h=document.body.getElementsByTagName("*");u(e,[a]),u(n,[r,s]),u(this.$panel,[e,n,l.getTag()]),setInterval(function(){var t=o.nodeCount,e=d.length-t,n=h.length-t,i=n/c,t="".concat(i).match(/(\d\.\d).*(e-\d*)/),i=t?"".concat(t[1],"*").concat(t[2]):i.toExponential(2);a.innerHTML=e,r.innerHTML="body ".concat(n),s.innerHTML="∂ ".concat(i),l.add(n)},t.frequency?1e3/t.frequency:1e3)}n(r,e);const s=r;function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=p("div",{className:"x-panel MEMmonitor"});var e=p("div",{text:"MEM",className:"title"}),n=p("li"),i=new m({width:140,height:t.height||50,options:t}),o=p("li"),a=new m({width:140,height:t.height||50,options:t}),r=p("li"),s=p("ul"),l=Math.pow(2,20);u(s,[e,n,i.getTag(),o,a.getTag(),r]),u(this.$panel,[s]),setInterval(function(){var t=(performance.memory.totalJSHeapSize/l).toFixed(2),e=(performance.memory.usedJSHeapSize/l).toFixed(2);n.innerHTML="Total: ".concat(t,"MB"),o.innerHTML="Used: ".concat(e,"MB"),r.innerHTML="Limit: ".concat((performance.memory.jsHeapSizeLimit/l).toFixed(2),"MB"),i.add(t),a.add(e)},t.frequency?1e3/t.frequency:1e3)}n(l,e);const c=l;function d(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=this;this.min=1/0,this.max=-1/0,this.events=[],this.options=t,this.$panel=p("div",{className:"x-panel"}),this.$title=p("div",{text:"EVENTS",className:"title"}),this.$stats=p("div",{className:"flexi"}),this.$actual=p("span"),this.$max=p("span");var n=new m({width:140,height:t.height||50,options:t});u(this.$stats,[this.$actual,this.$max]),u(this.$panel,[this.$title,this.$stats,n.getTag()]),this.listen(),setInterval(function(){var t=e.events.length;e.max=Math.max(e.max,t),e.$actual.innerHTML="Actual: ".concat(t),e.$max.innerHTML="Max: ".concat(e.max),e.events=[],n.add(t)},t.frequency?1e3/t.frequency:1e3)}n(d,e),d.prototype.add=function(t){this.events.push(t)},d.prototype.listen=function(){var e=this;Object.keys(window).forEach(function(t){/^on/.test(t)&&(!e.options.exclude||e.options.exclude.indexOf(t)<0)&&window.addEventListener(t.slice(2),function(t){e.add(t)},!0)})};const h=d;function f(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=p("div",{className:"x-panel"});var e=p("div",{text:"NETWORK",className:"title"}),n=p("div"),i=Math.pow(2,20);u(this.$panel,[e,n]),setInterval(function(){var t=performance.getEntries().reduce(function(t,e){return t+(e.transferSize||0)},0);n.innerHTML="Total: ".concat((t/i).toFixed(2)," MB")},t.frequency?1e3/t.frequency:1e3)}n(f,e);const g=f,v=function(t,e,n){switch(t){case"fps":return new a(e,n);case"mem":return new c(e,n);case"tags":return new s(e,n);case"net":return new g(e,n);case"events":return new h(e,n);default:return null}};function x(){var t=this;this.container=document.createElement("div"),this.toggler=document.createElement("div"),this.container.className="monitor-panel",this.toggler.className="monitor-panel-toggler",this.panels=[],this.nodeCount=0,this.visible=!0,this.toggler.addEventListener("click",function(){t.visible?(t.container.className="monitor-panel-hidden",t.toggler.className="monitor-panel-toggler-hidden"):(t.container.className="monitor-panel",t.toggler.className="monitor-panel-toggler"),t.visible=!t.visible})}x.prototype.addPanel=function(t,e){return this.panels.push(v(t,e,this)),this},x.prototype.render=function(t){var e=t.where,e=void 0===e?document.body:e,t=t.collapsible,n=this;this.container.innerHTML="",t&&n.container.appendChild(this.toggler),this.panels.forEach(function(t){t.render(n.container,n)}),e.appendChild(this.container),this.nodeCount=this.container.getElementsByTagName("*").length+1};const y=x;var b,w,T=N(379),M=N.n(T),e=N(175),T={insert:"head",singleton:!1};M()(e.Z,T),e.Z.locals,b=new y,w={showFPS:function(t){return b.addPanel("fps",t),w},showMEM:function(t){return b.addPanel("mem",t),w},showTAGS:function(t){return b.addPanel("tags",t),w},showEVENTS:function(t){return b.addPanel("events",t),w},showNET:function(t){return b.addPanel("net",t),w},render:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return b.render(t)}},window.WebPageMonitor=w})(),module.exports=E})();