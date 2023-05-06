/*!
 * web-page-monitor 0.0.27
 * fedeghe <fedeghe@gmail.com>
 */(()=>{var n={228:t=>{t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},858:t=>{t.exports=function(t){if(Array.isArray(t))return t}},884:t=>{t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}}},521:t=>{t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(t,e,n)=>{var o=n(858),i=n(884),r=n(379),a=n(521);t.exports=function(t,e){return o(t)||i(t,e)||r(t,e)||a()}},379:(t,e,n)=>{var o=n(228);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},175:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(81),e=n.n(o),o=n(645),e=n.n(o)()(e());e.push([t.id,".monitor-panel-hidden {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  font-family: monospace;\n  z-index: 9999;\n}\n.monitor-panel-hidden .x-panel {\n  display: none;\n}\n.monitor-panel-hidden .monitor-panel-toggler-hidden {\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  font-size: 2rem;\n  text-align: center;\n  filter: opacity(0.5);\n}\n.monitor-panel-hidden .monitor-panel-toggler-hidden::after {\n  content: '◤';\n  cursor: pointer;\n  color: green;\n  display: block;\n}\n.monitor-panel-hidden .monitor-panel-toggler-hidden:hover {\n  filter: opacity(1);\n}\n.monitor-panel {\n  pointer-events: none;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 150px;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 6px;\n  padding-bottom: 0px;\n  border-top-left-radius: 6px;\n  font-family: monospace;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.6em;\n  box-sizing: initial;\n}\n.monitor-panel .monitor-panel-toggler {\n  pointer-events: all;\n  width: 2rem;\n  height: 2rem;\n  line-height: 2rem;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  font-size: 2rem;\n  text-align: center;\n}\n.monitor-panel .monitor-panel-toggler::after {\n  content: '◢';\n  cursor: pointer;\n  color: red;\n  display: block;\n}\n.monitor-panel .x-panel {\n  border-radius: 3px;\n  margin-bottom: 6px;\n  padding: 6px;\n  color: greenyellow;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.monitor-panel .MEMmonitor ul,\n.monitor-panel .VIEWmonitor ul,\n.monitor-panel .LOADmonitor ul {\n  padding: 0;\n  margin: 0;\n}\n.monitor-panel .LOADmonitor {\n  max-height: 200px;\n  overflow: scroll;\n  pointer-events: all;\n  word-wrap: none;\n  line-break: none;\n}\n.monitor-panel .LOADmonitor .loadMonitorItem {\n  height: 1.2em;\n}\n.monitor-panel .LOADmonitor .loadMonitorLabel {\n  padding-right: 6px;\n}\n.monitor-panel .LOADmonitor .loadMonitorValue {\n  font-weight: bolder;\n  color: white;\n}\n.monitor-panel ul {\n  list-style: none;\n}\n.monitor-panel .title {\n  margin-bottom: 6px;\n  display: inline-block;\n  font-weight: bold;\n}\n.monitor-panel .flexi {\n  display: flex;\n  justify-content: space-between;\n}\n.monitor-panel .event {\n  pointer-events: all;\n}\n.monitor-panel .event::after {\n  content: '⁕';\n  cursor: pointer;\n}\n",""]);const i=e},645:t=>{"use strict";t.exports=function(o){var d=[];return d.toString=function(){return this.map(function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(0<t[5].length?" ".concat(t[5]):""," {")),e+=o(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e}).join("")},d.i=function(t,e,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);n&&r[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(0<c[5].length?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),d.push(c))}},d}},81:t=>{"use strict";t.exports=function(t){return t[1]}},994:t=>{"use strict";var c=[];function d(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s=n[a]||0,l="".concat(a," ").concat(s);n[a]=s+1;s=d(l),r={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};-1!==s?(c[s].references++,c[s].updater(r)):(r=function(e,t){var n=t.domAPI(t);return n.update(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer||n.update(e=t):n.remove()}}(r,e),e.byIndex=i,c.splice(i,0,{identifier:l,updater:r,references:1})),o.push(l)}return o}t.exports=function(t,r){var a=s(t=t||[],r=r||{});return function(t){t=t||[];for(var e=0;e<a.length;e++){var n=d(a[e]);c[n].references--}for(var t=s(t,r),o=0;o<a.length;o++){var i=d(a[o]);0===c[i].references&&(c[i].updater(),c.splice(i,1))}a=t}}},569:t=>{"use strict";var n={};t.exports=function(t,e){if(!(t=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(0<n.layer.length?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}"),(n=n.sourceMap)&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(o,t,e.options)}(n,e,t)},remove:function(){var t;null!==(t=n).parentNode&&t.parentNode.removeChild(t)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},o={};function R(t){var e=o[t];if(void 0!==e)return e.exports;e=o[t]={id:t,exports:{}};return n[t](e,e.exports,R),e.exports}R.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return R.d(e,{a:e}),e},R.d=(t,e)=>{for(var n in e)R.o(e,n)&&!R.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},R.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),R.nc=void 0,(()=>{"use strict";function t(){this.appended=!1}t.prototype.render=function(t){this.appended=!0,t.appendChild(this.$panel)};var e=t,n=R(38),i=R.n(n),r=JSON.parse('{"navigationStart":"navigationStart","unloadEventStart":"unloadEventStart","unloadEventEnd":"unloadEventEnd","redirectStart":"redirectStart","redirectEnd":"redirectEnd","fetchStart":"fetchStart","domainLookupStart":"domainLookupStart","domainLookupEnd":"domainLookupEnd","connectStart":"connectStart","connectEnd":"connectEnd","secureConnectionStart":"secureConnectionStart","requestStart":"requestStart","responseStart":"responseStart","responseEnd":"responseEnd","domLoading":"domLoading","domInteractive":"interactive","domContentLoadedEventStart":"loaded","domContentLoadedEventEnd":"domContentLoadedEventEnd","domComplete":"complete","loadEventStart":"loadEventStart","loadEventEnd":"loadEventEnd"}');function o(t,n){function e(){}e.prototype=n.prototype,t.prototype=new e,(t.prototype.constructor=t).superClass=n.prototype,t.baseConstructor=n,t.super=function(t){var e=[].slice.call(arguments,1);n.apply(t,e)}}function h(t,e){var n,o=1<arguments.length&&void 0!==e?e:{},i=o.className,r=void 0!==i&&i,a=o.text,e=void 0!==a&&a,i=o.html,a=void 0!==i&&i,i=o.attributes,s=void 0===i?{}:i,o=o.childs,o=void 0===o?[]:o,l=document.createElement(t);for(n in r&&(l.className=r),e&&(l.innerText=e),a&&(l.innerHTML=a),o.length&&p(l,o),s)l.setAttribute(n,s[n]);return l}function p(e,t){return t.forEach(function(t){e.appendChild(t)}),e}function m(t){return t?1e3/t:1e3}var a=window,s=a.document,l=s.body,c=s.documentElement,d={getViewportSize:function(){return void 0!==a.innerWidth?{width:a.innerWidth,height:a.innerHeight}:void 0!==c&&void 0!==c.clientWidth&&0!==c.clientWidth?{width:c.clientWidth,height:c.clientHeight}:{width:s.getElementsByTagName("body")[0].clientWidth,height:s.getElementsByTagName("body")[0].clientHeight}},bodySize:function(){var t=s.body,e=c;return[s.getElementsByTagName("html")[0].clientWidth,Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)]},pint:function(t){return parseInt(t,10)},scroll:function(){return{left:d.pint(d.f_filterResults(a.pageXOffset||0,c?c.scrollLeft:0,l?l.scrollLeft:0)),top:d.pint(d.f_filterResults(a.pageYOffset||0,c?c.scrollTop:0,l?l.scrollTop:0))}},f_filterResults:function(t,e,n){t=t||0;return e&&(!t||e<t)&&(t=e),n&&(!t||n<t)?n:t},getLoadTimes:function(t){var o,e=t||[];return Object.entries(r).map(function(t){var e=i()(t,2),n=e[0],t=e[1],e=performance.timing[n];return o=o||e,!(isNaN(e)||!e)&&[n,t,e-o]}).filter(function(t){return t&&e.includes(t[0])}).sort(function(t,e){return t[2]-e[2]})}};function u(t){var e=t.width,n=t.height,t=t.options;this.width=e,this.height=n,this.options=t,this.tag=h("canvas",{attributes:{width:e,height:n}}),this.ctx=this.tag.getContext("2d"),this.ctx.fillStyle="black",this.ctx.strokeStyle="#00FF00",this.data=[],this.normalized=[],this.max=0}u.prototype.clear=function(){this.ctx.fillRect(0,0,this.width,this.height)},u.prototype.normalize=function(t){return this.max?t*this.height/this.max:this.height},u.prototype.add=function(t){this.data.push(t);var e=this.normalize(t),n=this.data.reduce(function(t,e){return e<t?t:e},0),t=this.data.length>this.width?1:0;this.data=this.data.slice(t),n!==this.max?(this.normalized=this.data.map(this.normalize.bind(this)),this.max=n):this.normalized.push(e),this.normalized=this.normalized.slice(t),this.render()},u.prototype.getTag=function(){return this.tag},u.prototype.render=function(){var n=this;this.clear(),this.normalized.forEach(function(t,e){n.ctx.beginPath(),n.ctx.strokeStyle=n.options.color||"rgba(0,256,0, 0.5)",n.ctx.moveTo(e,n.height),n.ctx.lineTo(e,n.height-t),n.ctx.stroke()})};const f=u;function g(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=h("div",{className:"x-panel"});var o,e=h("span",{text:"FPS",className:"title"}),i=h("span"),r=new f({width:140,height:t.height||50,options:t}),a=[];p(this.$panel,[e,i,r.getTag()]),function n(){window.requestAnimationFrame(function(){for(var t=performance.now();0<a.length&&a[0]<=t-1e3;)a.shift();a.push(t);var e=a.length;o=60<e?60:e,i.innerHTML=": ".concat(o," fps"),r.add(o),n()})}()}o(g,e);var v=g;function y(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=1<arguments.length?arguments[1]:void 0;this.$panel=h("div",{className:"x-panel"});var e=h("div",{text:"TAGS: ",className:"title"}),r=h("span"),n=h("div",{className:"flexi"}),a=h("div"),s=h("div"),l=new f({width:140,height:t.height||50,options:t}),c=document.body.clientHeight*document.body.clientWidth,d=document.getElementsByTagName("*"),u=document.body.getElementsByTagName("*");p(e,[r]),p(n,[a,s]),p(this.$panel,[e,n,l.getTag()]),setInterval(function(){var t=i.nodeCount,e=d.length-t,n=u.length-t,o=n/c,t="".concat(o).match(/(\d\.\d).*(e-\d*)/),o=t?"".concat(t[1],"*").concat(t[2]):o.toExponential(2);r.innerHTML=e,a.innerHTML="body ".concat(n),s.innerHTML="∂ ".concat(o),l.add(n)},m(t.frequency))}o(y,e);var x=y;function b(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=h("div",{className:"x-panel MEMmonitor"});var e=h("div",{text:"MEM",className:"title"}),n=h("li"),o=new f({width:140,height:t.height||50,options:t}),i=h("li"),r=new f({width:140,height:t.height||50,options:t}),a=h("li"),s=h("ul"),l=Math.pow(2,20);p(s,[e,n,o.getTag(),i,r.getTag(),a]),p(this.$panel,[s]),setInterval(function(){var t=(performance.memory.totalJSHeapSize/l).toFixed(2),e=(performance.memory.usedJSHeapSize/l).toFixed(2);n.innerHTML="Total: ".concat(t,"MB"),i.innerHTML="Used: ".concat(e,"MB"),a.innerHTML="Limit: ".concat((performance.memory.jsHeapSizeLimit/l).toFixed(2),"MB"),o.add(t),r.add(e)},m(t.frequency))}o(b,e);var w=b;function E(t){this.queueLenght=t||10,this.queue=Array.from({length:this.queueLenght}),this.queueIndex=0}E.prototype.enqueue=function(t){this.queue[this.queueIndex]=t,this.queueIndex=(this.queueIndex+1)%this.queueLenght},E.prototype.clear=function(t){this.queueIndex=0,this.queue=Array.from({length:this.queueLenght})},E.prototype.getList=function(){var n=this;return this.queue.map(function(t,e){return n.queue[(e+n.queueIndex)%n.queueLenght]})};const S=E;function L(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=this;this.min=1/0,this.max=-1/0,this.events=[],this.queue=new S(100),this.options=t,this.$panel=h("div",{className:"x-panel"}),this.$title=h("div",{text:"EVENTS",className:"title event"}),this.$stats=h("div",{className:"flexi"}),this.$actual=h("span"),this.$max=h("span");var n=new f({width:140,height:t.height||50,options:t});p(this.$stats,[this.$actual,this.$max]),p(this.$panel,[this.$title,this.$stats,n.getTag()]),this.listen(),setInterval(function(){var t=e.events.length;e.max=Math.max(e.max,t),e.$actual.innerHTML="Actual: ".concat(t),e.$max.innerHTML="Max: ".concat(e.max),e.events=[],n.add(t)},m(t.frequency))}o(L,e),L.prototype.add=function(t){this.events.push(t)},L.prototype.listen=function(){var e=this;e.$title.addEventListener("click",function(){console.log(e.queue.getList())}),Object.keys(window).forEach(function(t){/^on/.test(t)&&(!e.options.exclude||e.options.exclude.indexOf(t)<0)&&window.addEventListener(t.slice(2),function(t){e.queue.enqueue(t),e.add(t)},!0)})};var T=L;function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=h("div",{className:"x-panel"});var e=h("div",{text:"NETWORK",className:"title"}),n=h("div"),o=Math.pow(2,20);p(this.$panel,[e,n]),setInterval(function(){var t=performance.getEntries().reduce(function(t,e){return t+(e.transferSize||0)},0);n.innerHTML="Total: ".concat((t/o).toFixed(2)," MB")},m(t.frequency))}o(M,e);var N=M;function q(){this.$panel=h("div",{className:"x-panel VIEWmonitor"});function t(){return"<strong>VIEWPORT</strong><br/>".concat(o.width," * ").concat(o.height)}function e(){return"<strong>BODY</strong><br/>".concat(i[0]," * ").concat(i[1])}function n(){return"<strong>SCROLLING</strong><br/>".concat(r.left," | ").concat(r.top)}var o=d.getViewportSize(),i=d.bodySize(),r=d.scroll(),a=h("li",{html:t()}),s=h("li",{html:e()}),l=h("li",{html:n()}),c=h("ul");p(c,[a,s,l]),p(this.$panel,[c]),window.addEventListener("resize",function(){o=d.getViewportSize(),i=d.bodySize(),a.innerHTML=t(),s.innerHTML=e()}),window.addEventListener("scroll",function(){r=d.scroll(),l.innerHTML=n()})}o(q,e);var H=q;function I(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=h("div",{className:"x-panel LOADmonitor"});var e=h("span",{text:"LOAD TIMES",className:"title"}),n=h("ul");p(this.$panel,[e,n]),p(n,d.getLoadTimes(t.elements).map(function(t){return p(h("li",{className:"loadMonitorItem"}),[h("span",{html:t[1],className:"loadMonitorLabel"}),h("span",{html:t[2],className:"loadMonitorValue"})])}))}o(I,e);var $=I;const z=function(t,e,n){var o={fps:v,tags:x,net:N,events:T,view:H,load:$};return"performance"in window&&"memory"in performance&&(o.mem=w),t in o?new o[t](e,n):null};function A(){var t=this;this.container=document.createElement("div"),this.toggler=document.createElement("div"),this.container.className="monitor-panel",this.toggler.className="monitor-panel-toggler",this.panels=[],this.nodeCount=0,this.visible=!0,this.toggler.addEventListener("click",function(){t.visible?(t.container.className="monitor-panel-hidden",t.toggler.className="monitor-panel-toggler-hidden"):(t.container.className="monitor-panel",t.toggler.className="monitor-panel-toggler"),t.visible=!t.visible})}A.prototype.addPanel=function(t,e){return this.panels.push(z(t,e,this)),this},A.prototype.render=function(t){var e=t.where,n=void 0===e?document.body:e,e=t.collapsible,e=void 0!==e&&e,t=t.opacity,t=void 0===t?1:t,o=this;this.container.innerHTML="",this.container.style.opacity=t,e&&o.container.appendChild(this.toggler),this.panels.forEach(function(t){t.render(o.container,o)}),n.appendChild(this.container),this.nodeCount=this.container.getElementsByTagName("*").length+1};const C=A;var O,k,W=R(994),j=R.n(W),B=R(795),F=R.n(B),P=R(569),V=R.n(P),n=R(565),e=R.n(n),W=R(216),B=R.n(W),P=R(589),n=R.n(P),W=R(175);function D(e){return function(t){return O.addPanel(e,t),k}}(P={}).styleTagTransform=n(),P.setAttributes=e(),P.insert=V().bind(null,"head"),P.domAPI=F(),P.insertStyleElement=B(),j()(W.Z,P),W.Z&&W.Z.locals&&W.Z.locals,O=new C,k={showFPS:D("fps"),showMEM:D("mem"),showTAGS:D("tags"),showEVENTS:D("events"),showNET:D("net"),showVIEW:D("view"),showLOAD:D("load"),render:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return O.render(t)}},window.WebPageMonitor=k})()})();