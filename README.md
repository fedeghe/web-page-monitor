# web-page-monitor

[![](https://data.jsdelivr.com/v1/package/npm/web-page-monitor/badge)](https://www.jsdelivr.com/package/npm/web-page-monitor)

## Try it

Create a bookmarklet on your browser (and then try it where policies allows you to)  using the following:

<details>
    <summary>click here to show the ready to use <strong>bookmarklet</strong> (no options)</summary>

<pre>
javascript:void(function(){%2Bfunction%20()%20%7Btry%20%7Bvar%20url%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fweb-page-monitor%400.0.11%2Fdist%2Findex.min.js%22%2Cscript%20%3D%20document.createElement('script')%3Bscript.onload%20%3D%20function%20()%20%7BWebPageMonitor.showNET().showFPS().showMEM(%7Bheight%3A%2030%7D).showTAGS(%7Bfrequency%3A%2010%7D).showEVENTS(%7Bfrequency%3A%2010%2Cexclude%3A%20%5B'onmousemove'%5D%7D).render(%7Bcollapsible%3A%20true%7D)%3B%7D%3Bscript.setAttribute('src'%2C%20url)%3Bdocument.getElementsByTagName('head').item(0).appendChild(script)%3B%7Dcatch(e)%7Balert('Can%60t%20inject%20script%2C%20most%20likely%20due%20to%20Content-Security-Policy')%3B%7D%7D()%3B}())
</pre>

which comes from the following:
<pre>
+function () {
    try {
        var url = "https://cdn.jsdelivr.net/npm/web-page-monitor@0.0.11/dist/index.min.js",
            script = document.createElement('script');
        script.onload = function () {
            WebPageMonitor
                .showNET()
                .showFPS()
                .showMEM({
                    height: 30,
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
                .render({collapsible:true});
        };
        script.setAttribute('src', url);
        document.getElementsByTagName('head').item(0).appendChild(script);
    } catch (e) {
        alert('Can`t inject script, most likely due to Content-Security-Policy')
    }
}();
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
    .showNET(/* options */)
    .render(/* where, default body */);
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
            <p>just to have an idea tehe following are those possible on webkit</p>
        <pre style="font-size:0.7em">
onsearch, onappinstalled, onbeforeinstallprompt, onabort, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onformdata, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, onwebkitanimationend, onwebkitanimationiteration, onwebkitanimationstart, onwebkittransitionend, onwheel, onauxclick, ongotpointercapture, onlostpointercapture, onpointerdown, onpointermove, onpointerup, onpointercancel, onpointerover, onpointerout, onpointerenter, onpointerleave, onselectstart, onselectionchange, onanimationend, onanimationiteration, onanimationstart, ontransitionrun, ontransitionstart, ontransitionend, ontransitioncancel, onafterprint, onbeforeprint, onbeforeunload, onhashchange, onlanguagechange, onmessage, onmessageerror, onoffline, ononline, onpagehide, onpageshow, onpopstate, onrejectionhandled, onstorage, onunhandledrejection, onunload, ondevicemotion, ondeviceorientation, ondeviceorientationabsolute, onpointerrawupdate
        </pre> 
        </div>
    </details>
</div>






<hr />
fedegheATgmailDOTcom

