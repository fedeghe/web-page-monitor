# web-page-monitor

[![](https://data.jsdelivr.com/v1/package/npm/web-page-monitor/badge)](https://www.jsdelivr.com/package/npm/web-page-monitor)

## Try it

Create a bookmarklet on your browser (and then try it where policies allows you to)  using the following: 

<details>
    <summary>click here to show the ready to use <strong>bookmarklet</strong> (no options)</summary>

<pre>
javascript:void(function(){(function()%20%7B'SecurityPolicyViolationEvent'%20in%20window%20%26%26%20window.addEventListener('securitypolicyviolation'%2Cfunction(e)%7Bswitch(e.type)%7Bcase%20'securitypolicyviolation'%3Aalert('Impossible%20to%20inject%20the%20monitor%20due%20to%20CSP%20(content%20security%20policy)')%3Bbreak%3B%7D%7D)%3Bvar%20url%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fweb-page-monitor%400.0.20%2Fdist%2Findex.js%22%2Cscript%3Ddocument.createElement('script')%3Bscript.onload%3Dfunction()%7Bvar%20already%3Ddocument.querySelectorAll('.monitor-panel%2C.monitor-panel-hidden').length%3Bif(!already)%7BWebPageMonitor.showNET().showFPS().showMEM(%7Bheight%3A30%7D).showTAGS(%7Bfrequency%3A10%7D).showEVENTS(%7Bfrequency%3A10%2Cexclude%3A%5B'onmousemove'%5D%7D).showVIEW().render(%7Bcollapsible%3Atrue%7D)%3B%7D%7D%3Bscript.setAttribute('src'%2Curl)%3Bdocument.getElementsByTagName('head').item(0).appendChild(script)%3B%7D)()%3B}())
</pre>

which comes from the following:
<pre>
(function() {
    'SecurityPolicyViolationEvent' in window
        &&
        window.addEventListener('securitypolicyviolation', function(e) {
            switch (e.type) {
                case 'securitypolicyviolation':
                    alert('Impossible to inject the monitor due to CSP (content security policy)');
                    break;
            }
        });

    var url = "https://cdn.jsdelivr.net/npm/web-page-monitor@0.0.16/dist/index.js",
        script = document.createElement('script');
    script.onload = function() {
        WebPageMonitor
            .showNET()
            .showFPS()
            .showMEM({
                height: 30,
            })
            .showLOAD({
                elements: [
                    'domInteractive',
                    'domContentLoadedEventStart',
                    'domComplete',
                ]
            })
            .showTAGS({
                frequency: 10,
            })
            .showEVENTS({
                frequency: 10,
                exclude: [
                    'onmousemove',
                ]
            })
            .showVIEW()
            .render({
                collapsible: true
            });
    };
    script.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(script);
})();
</pre>
</details>
<br>

## Install it  
``` sh
yarn add web-page-monitor
```

## Use it
```
import 'web-page-monitor'

WebPageMonitor
    .showFPS(/* options */)
    .showMEM(/* options */)
    .showTAGS(/* options */)
    .showEVENTS(/* options */)
    .showLOAD(/* options */)
    .showNET(/* options */)
    .showVIEW()
    .render({where: document.body /* default is body */, collapsible: true /* default false */});
```

if You want to render elsewhere just pass `{where: YourTargetNode}` when calling _render_.



<hr>
<hr>
<hr>

## Available panels 

![network monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/network.png)

<div>
    <details>
        <summary>NETWORK options <strong>(still NOT working as it should)</strong></summary>
        <div>
            Shows the overall data network flow in MB. 
            Options available:
            <pre style="font-size:0.7em">{ 
    height: int // in px the height of the panel
}</pre>
        </div>
    </details>
</div>
<hr />



![memory monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/fps.png)

<div>
    <details>
        <summary>FPS options</summary>
        <div>
            Shows the current rendering frames per seconds.  
            Options available:
            <pre style="font-size:0.7em">{ 
    height: int, // in px the height of the panel
    color: '#fede76' // the color fo the graph, default is `rgba(0,256,0, 0.5)`
}</pre>
        </div>
    </details>
</div>
<hr />


![memory monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/mem.png)

<div>
    <details>
        <summary>MEMORY options</summary>
        <div>Shows the total and used instant memory in MB.  
            Options available:
            <pre style="font-size:0.7em">{ 
    height: int // in px the height of the panel
    color: '#fede76' // the color fo the graph, default is `rgba(0,256,0, 0.5)`
    frequency: 10 // the frequency of the update, default is 1
}</pre>
        </div>
    </details>
</div>
<hr />

![tags monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/tags.png)

<div>
    <details>
        <summary>TAGS options</summary>
        <div>Shows how many nodes are in the page.  
            Options available:
            <pre style="font-size:0.7em">{ 
    height: int // in px the height of the panel
    color: '#fede76' // the color fo the graph, default is `rgba(0,256,0, 0.5)`
    frequency: 10 // the frequency of the update, default is 1
}</pre>
        </div>
    </details>
</div>
<hr />

![GitHub Logo](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/events.png)

<div>
    <details>
        <summary>EVENTS options</summary>
        <div>Shows the instant number of occurring events whithin the period .  
            Options available:
            <pre style="font-size:0.7em">{ 
    height: int // in px the height of the panel
    color: '#fede76' // the color fo the graph, default is `rgba(0,256,0, 0.5)`
    frequency: 10 // the frequency of the update, default is 1,
    exclude: ['onmousemove'] // exclude one or more events, there are a lot
}</pre>
            <p>just to have an idea the following are those possible on webkit</p>
        <pre style="font-size:0.7em">
onsearch, onappinstalled, onbeforeinstallprompt, onabort, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onformdata, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, onwebkitanimationend, onwebkitanimationiteration, onwebkitanimationstart, onwebkittransitionend, onwheel, onauxclick, ongotpointercapture, onlostpointercapture, onpointerdown, onpointermove, onpointerup, onpointercancel, onpointerover, onpointerout, onpointerenter, onpointerleave, onselectstart, onselectionchange, onanimationend, onanimationiteration, onanimationstart, ontransitionrun, ontransitionstart, ontransitionend, ontransitioncancel, onafterprint, onbeforeprint, onbeforeunload, onhashchange, onlanguagechange, onmessage, onmessageerror, onoffline, ononline, onpagehide, onpageshow, onpopstate, onrejectionhandled, onstorage, onunhandledrejection, onunload, ondevicemotion, ondeviceorientation, ondeviceorientationabsolute, onpointerrawupdate
        </pre> 
        </div>
    </details>
</div>

<hr />

![tags monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/view.png)

<div>
    <details>
        <summary>VIEW options</summary>
        <div>Shows viewport size, body size and scrolling values.</div>
    </details>
</div>


![tags monitor](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/load.png)

<div>
    <details>
        <summary>Load options</summary>
        <div>Shows browser metrics from `performance.timing`.</div>
        <p>all the following are available</p>
        <pre style="font-size:0.7em">
navigationStart, unloadEventStart, unloadEventEnd, redirectStart, redirectEnd, fetchStart, domainLookupStart, domainLookupEnd, connectStart, connectEnd, secureConnectionStart, requestStart, responseStart, responseEnd, domLoading, domInteractive, domContentLoadedEventStart, domContentLoadedEventEnd, domComplete, loadEventStart, loadEventEnd
        </pre> 
    </details>
</div>






<hr />
fedegheATgmailDOTcom

