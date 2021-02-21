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



<div>
    <details>
        <summary  style="min-height:50px;">
            <span>NETWORK</span>
            <img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/network.png">
        </summary>
        <div>Shows the overall data network flow in MB.  
            Options available:
            <pre>
        { 
            height: int // in px the height of the panel
        }
            </pre>
        </div>
    </details>
</div>
<hr />


<div>
    <details>
        <summary style="min-height:120px;">
            <span>FPS monitor<span>
            <img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/fps.png">
        </summary>
        <div>
            Shows the overall data network flow in MB.  
            Options available:
            <pre>
        {
            height: int // in px the height of the panel
        }
            </pre>
        </div>
    </details>
</div>
<hr />




<div>
    <details>
        <summary style="height:175px;">
            <span>MEMORY monitorM</span>
            <img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/mem.png">
        </summary>
        <div>
            Shows the overall data network flow in MB.  
            Options available:
            <pre>
        {
            height: int // in px the height of the panel
        }
            </pre>
        </div>
    </details>
</div>
<hr />


<div style="min-height:120px;">
    <details>
        <summary>
            <span>TAGS monitor</span>
            <img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/tags.png">
        </summary>
        <div>
            Shows the overall data network flow in MB.  
            Options available:
            <pre>
        {
            height: int // in px the height of the panel
        }
            </pre>
        </div>
    </details>
</div>
<hr />



<div style="min-height:135px;">
    <details>
        <summary>
            <span>EVENTS monitor</span>
            <img align="left" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/img/events.png">
        </summary>
        <div>
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
        </div> 
    </details>
</div>
<hr />
fedegheATgmailDOTcom

