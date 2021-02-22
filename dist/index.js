/*!
 * web-page-monitor 0.0.5
 * fedeghe <fedeghe@gmail.com>
 */(()=>{"use strict";var n={426:(t,e,n)=>{n.d(e,{Z:()=>i});e=n(645),e=n.n(e)()(function(t){return t[1]});e.push([t.id,".MEMmonitor ul {\n  padding: 0;\n  margin: 0;\n}\nul {\n  list-style: none;\n}\n.title {\n  margin-bottom: 5px;\n  display: inline-block;\n  font-weight: bold;\n}\n.flexi {\n  display: flex;\n  justify-content: space-between;\n}\n",""]);const i=e},175:(t,e,n)=>{n.d(e,{Z:()=>i});e=n(645),e=n.n(e)()(function(t){return t[1]});e.push([t.id,".monitor-panel {\n  pointer-events: none;\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 150px;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 5px;\n  padding-bottom: 0px;\n  border-top-left-radius: 6px;\n  font-family: monospace;\n  font-size: 0.8em;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.6em;\n  box-sizing: initial;\n}\n.x-panel {\n  border-radius: 3px;\n  margin-bottom: 5px;\n  padding: 5px;\n  color: greenyellow;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n",""]);const i=e},645:t=>{t.exports=function(n){var c=[];return c.toString=function(){return this.map(function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},c.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var r=0;r<t.length;r++){var s=[].concat(t[r]);n&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),c.push(s))}},c}},379:(t,e,o)=>{var n,i,s=function(){return n=void 0===n?Boolean(window&&document&&document.all&&!window.atob):n},a=(i={},function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}),l=[];function d(t){for(var e=-1,n=0;n<l.length;n++)if(l[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},i=[],o=0;o<t.length;o++){var a=t[o],r=e.base?a[0]+e.base:a[0],s=n[r]||0,c="".concat(r," ").concat(s);n[r]=s+1;s=d(c),a={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(l[s].references++,l[s].updater(a)):l.push({identifier:c,updater:function(e,t){var n,i,o;{var a;o=t.singleton?(a=m++,n=f=f||h(t),i=p.bind(null,n,a,!1),p.bind(null,n,a,!0)):(n=h(t),i=function(t,e,n){var i=n.css,o=n.media,n=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media");n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */"));if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n,t),function(){var t;null!==(t=n).parentNode&&t.parentNode.removeChild(t)})}return i(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap||i(e=t):o()}}(a,e),references:1}),i.push(c)}return i}function h(t){var e,n=document.createElement("style"),i=t.attributes||{};if(void 0!==i.nonce||(e=o.nc)&&(i.nonce=e),Object.keys(i).forEach(function(t){n.setAttribute(t,i[t])}),"function"==typeof t.insert)t.insert(n);else{t=a(t.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}return n}var r,u=(r=[],function(t,e){return r[t]=e,r.filter(Boolean).join("\n")});function p(t,e,n,i){n=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;t.styleSheet?t.styleSheet.cssText=u(e,n):(i=document.createTextNode(n),(n=t.childNodes)[e]&&t.removeChild(n[e]),n.length?t.insertBefore(i,n[e]):t.appendChild(i))}var f=null,m=0;t.exports=function(t,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=s());var r=c(t=t||[],a);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<r.length;e++){var n=d(r[e]);l[n].references--}for(var t=c(t,a),i=0;i<r.length;i++){var o=d(r[i]);0===l[o].references&&(l[o].updater(),l.splice(o,1))}r=t}}}}},i={};function E(t){if(i[t])return i[t].exports;var e=i[t]={id:t,exports:{}};return n[t](e,e.exports,E),e.exports}E.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return E.d(e,{a:e}),e},E.d=(t,e)=>{for(var n in e)E.o(e,n)&&!E.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},E.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),E.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var S={};(()=>{function t(){this.appended=!1}E.r(S),t.prototype.render=function(t){this.appended=!0,t.appendChild(this.$panel)};var e=t;function n(t,n){function e(){}e.prototype=n.prototype,t.prototype=new e,(t.prototype.constructor=t).superClass=n.prototype,t.baseConstructor=n,t.super=function(t){var e=[].slice.call(arguments,1);n.apply(t,e)}}function u(t,e){var n,i=1<arguments.length&&void 0!==e?e:{},o=i.className,a=void 0!==o&&o,r=i.text,e=void 0!==r&&r,o=i.html,r=void 0!==o&&o,o=i.attributes,s=void 0===o?{}:o,i=i.childs,i=void 0===i?[]:i,c=document.createElement(t);for(n in a&&(c.className=a),e&&(c.innerText=e),r&&(c.innerHTML=r),i.length&&p(c,i),s)c.setAttribute(n,s[n]);return c}function p(e,t){t.forEach(function(t){e.appendChild(t)})}function i(t){var e=t.width,n=t.height,t=t.options;this.width=e,this.height=n,this.options=t,this.tag=u("canvas",{attributes:{width:e,height:n}}),this.ctx=this.tag.getContext("2d"),this.ctx.fillStyle="black",this.ctx.strokeStyle="#00FF00",this.data=[],this.normalized=[],this.max=0}i.prototype.clear=function(){this.ctx.fillRect(0,0,this.width,this.height)},i.prototype.normalize=function(t){return this.max?t*this.height/this.max:this.height},i.prototype.add=function(t){this.data.push(t);var e=this.normalize(t),n=this.data.reduce(function(t,e){return e<t?t:e},0),t=this.data.length>this.width?1:0;this.data=this.data.slice(t),n!==this.max?(this.normalized=this.data.map(this.normalize.bind(this)),this.max=n):this.normalized.push(e),this.normalized=this.normalized.slice(t),this.render()},i.prototype.getTag=function(){return this.tag},i.prototype.render=function(){var n=this;this.clear(),this.normalized.forEach(function(t,e){n.ctx.beginPath(),n.ctx.strokeStyle=n.options.color||"rgba(0,256,0, 0.5)",n.ctx.moveTo(e,n.height),n.ctx.lineTo(e,n.height-t),n.ctx.stroke()})};const f=i;var o=E(379),a=E.n(o),r=E(426),o={insert:"head",singleton:!1};function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=u("div",{className:"x-panel"});var i,e=u("span",{text:"FPS",className:"title"}),o=u("span"),a=new f({width:140,height:t.height||50,options:t}),r=[];p(this.$panel,[e,o,a.getTag()]),function n(){window.requestAnimationFrame(function(){for(var t=performance.now();0<r.length&&r[0]<=t-1e3;)r.shift();r.push(t);var e=r.length;i=60<e?60:e,o.innerHTML=": ".concat(i," fps"),a.add(i),n()})}()}a()(r.Z,o),r.Z.locals,n(s,e);const c=s;function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length?arguments[1]:void 0;this.$panel=u("div",{className:"x-panel"});var e=u("div",{text:"TAGS: ",className:"title"}),a=u("span"),n=u("div",{className:"flexi"}),r=u("div"),s=u("div"),c=new f({width:140,height:t.height||50,options:t}),l=document.body.clientHeight*document.body.clientWidth,d=document.getElementsByTagName("*"),h=document.body.getElementsByTagName("*");p(e,[a]),p(n,[r,s]),p(this.$panel,[e,n,c.getTag()]),setInterval(function(){var t=o.nodeCount,e=d.length-t,n=h.length-t,i=n/l,t="".concat(i).match(/(\d\.\d).*(e-\d*)/),i=t?"".concat(t[1],"*").concat(t[2]):i.toExponential(2);a.innerHTML=e,r.innerHTML="body ".concat(n),s.innerHTML="∂ ".concat(i),c.add(n)},t.frequency?1e3/t.frequency:1e3)}n(l,e);const d=l;function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=u("div",{className:"x-panel MEMmonitor"});var e=u("div",{text:"MEM",className:"title"}),n=u("li"),i=new f({width:140,height:t.height||50,options:t}),o=u("li"),a=new f({width:140,height:t.height||50,options:t}),r=u("li"),s=u("ul"),c=Math.pow(2,20);p(s,[e,n,i.getTag(),o,a.getTag(),r]),p(this.$panel,[s]),setInterval(function(){var t=(performance.memory.totalJSHeapSize/c).toFixed(2),e=(performance.memory.usedJSHeapSize/c).toFixed(2);n.innerHTML="Total: ".concat(t,"MB"),o.innerHTML="Used: ".concat(e,"MB"),r.innerHTML="Limit: ".concat((performance.memory.jsHeapSizeLimit/c).toFixed(2),"MB"),i.add(t),a.add(e)},t.frequency?1e3/t.frequency:1e3)}n(h,e);const m=h;function v(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=this;this.min=1/0,this.max=-1/0,this.events=[],this.options=t,this.$panel=u("div",{className:"x-panel"}),this.$title=u("div",{text:"EVENTS",className:"title"}),this.$stats=u("div",{className:"flexi"}),this.$actual=u("span"),this.$max=u("span");var n=new f({width:140,height:t.height||50,options:t});p(this.$stats,[this.$actual,this.$max]),p(this.$panel,[this.$title,this.$stats,n.getTag()]),this.listen(),setInterval(function(){var t=e.events.length;e.max=Math.max(e.max,t),e.$actual.innerHTML="Actual: ".concat(t),e.$max.innerHTML="Max: ".concat(e.max),e.events=[],n.add(t)},t.frequency?1e3/t.frequency:1e3)}n(v,e),v.prototype.add=function(t){this.events.push(t)},v.prototype.listen=function(){var e=this;Object.keys(window).forEach(function(t){/^on/.test(t)&&(!e.options.exclude||e.options.exclude.indexOf(t)<0)&&window.addEventListener(t.slice(2),function(t){e.add(t)},!0)})};const g=v;function x(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.$panel=u("div",{className:"x-panel NETWORKmonitor"});var e=u("div",{text:"NETWORK",className:"title"}),n=u("div"),i=Math.pow(2,20);p(this.$panel,[e,n]),setInterval(function(){var t=performance.getEntries().reduce(function(t,e){return t+(e.transferSize||0)},0);n.innerHTML="Total: ".concat((t/i).toFixed(2)," MB")},t.frequency?1e3/t.frequency:1e3)}n(x,e);const y=x,b=function(t,e,n){switch(t){case"fps":return new c(e,n);case"mem":return new m(e,n);case"tags":return new d(e,n);case"net":return new y(e,n);case"events":return new g(e,n);default:return null}};function w(){this.container=document.createElement("div"),this.container.className="monitor-panel",this.panels=[],this.nodeCount=0}w.prototype.addPanel=function(t,e){return this.panels.push(b(t,e,this)),this},w.prototype.render=function(t){this.container.innerHTML="";var e=this;this.panels.forEach(function(t){t.render(e.container,e)}),t.appendChild(this.container),this.nodeCount=this.container.getElementsByTagName("*").length+1};const T=w;var M,N,r=E(175),e={insert:"head",singleton:!1};a()(r.Z,e),r.Z.locals,M=new T,N={showFPS:function(t){return M.addPanel("fps",t),N},showMEM:function(t){return M.addPanel("mem",t),N},showTAGS:function(t){return M.addPanel("tags",t),N},showEVENTS:function(t){return M.addPanel("events",t),N},showNET:function(t){return M.addPanel("net",t),N},render:function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).where;return M.render(t||document.body)}},window.WebPageMonitor=N})(),module.exports=S})();