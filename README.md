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


<img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/network.png">
<div style="min-height:50px;">
    <details>
        <summary>NETWORK monitor</summary>
        Shows the overall data network flow in MB.  
        Options available:
        <pre>
    {
        height: int // in px the height of the panel
    }
        </pre>
    </details>
</div>
<hr />

<img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/fps.png">
<div style="min-height:90px;">
    <details>
        <summary>FPS monitor</summary>
        Shows the overall data network flow in MB.  
        Options available:
        <pre>
    {
        height: int // in px the height of the panel
    }
        </pre>
    </details>
</div>
<hr />



<img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/mem.png">
<div style="min-height:145px;">
    <details>
        <summary>MEMORY monitor</summary>
        Shows the overall data network flow in MB.  
        Options available:
        <pre>
    {
        height: int // in px the height of the panel
    }
        </pre>
    </details>
</div>
<hr />

<img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/tags.png">
<div style="min-height:90px;">
    <details>
        <summary>TAGS monitor</summary>
        Shows the overall data network flow in MB.  
        Options available:
        <pre>
    {
        height: int // in px the height of the panel
    }
        </pre>
    </details>
</div>
<hr />


<img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/events.png">
<div style="min-height:105px;">
    <details>
        <summary>EVENTS monitor</summary>
        Shows the overall data network flow in MB.  
        Options available:
        <pre>
    {
        height: int // in px the height of the panel
    }
        </pre>
        <p>also</p>
        <pre>
onsearch, onappinstalled, onbeforeinstallprompt, onabort, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onformdata, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, onwebkitanimationend, onwebkitanimationiteration, onwebkitanimationstart, onwebkittransitionend, onwheel, onauxclick, ongotpointercapture, onlostpointercapture, onpointerdown, onpointermove, onpointerup, onpointercancel, onpointerover, onpointerout, onpointerenter, onpointerleave, onselectstart, onselectionchange, onanimationend, onanimationiteration, onanimationstart, ontransitionrun, ontransitionstart, ontransitionend, ontransitioncancel, onafterprint, onbeforeprint, onbeforeunload, onhashchange, onlanguagechange, onmessage, onmessageerror, onoffline, ononline, onpagehide, onpageshow, onpopstate, onrejectionhandled, onstorage, onunhandledrejection, onunload, ondevicemotion, ondeviceorientation, ondeviceorientationabsolute, onpointerrawupdate
        </pre>  
    </details>
</div>
<hr />
fedegheATgmailDOTcom

