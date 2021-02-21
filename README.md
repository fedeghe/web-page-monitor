# web-page-monitor (work in progress)

### install
``` sh
yarn add web-page-monitor
```


### use it
```
import 'web-page-monitor'

WebPageMonitor
    .showFPS()
    .showMEM()
    .showTAGS()
    .showEVENTS()
    .showNET()
    .render();
```

## Available panels 

![GitHub Logo](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/network.png)

<div>
    <details>
        <summary>NETWORK</summary>
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



![GitHub Logo](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/fps.png)

<div>
    <details>
        <summary>FPS</summary>
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


![GitHub Logo](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/mem.png)

<div>
    <details>
        <summary>MEMORY</summary>
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

![GitHub Logo](https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/tags.png)

<div>
    <details>
        <summary>TAGS</summary>
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
        <summary>EVENTS</summary>
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

