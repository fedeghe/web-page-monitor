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


<div>
<img style="margin-right:20px" src="https://raw.githubusercontent.com/fedeghe/web-page-monitor/master/ss.png" align="left">
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
<br/>
<br/>
<details>
    <summary>FPS monitor</summary>
    FPS monitor details
</details>
<br/>
<br/>
<details>
    <summary>MEM monitor</summary>
    MEM monitor details
</details>
<br/>
<br/>
<br/>
<br/>
<br/>
<details>
    <summary>TAGS monitor</summary>
    FPS monitor details
</details>
<br/>
<br/>
<br/>
<details>
    <summary>EVENTS monitor</summary>
    FPS monitor details
</details>
</div>




```
onsearch, onappinstalled, onbeforeinstallprompt, onabort, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onformdata, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, onwebkitanimationend, onwebkitanimationiteration, onwebkitanimationstart, onwebkittransitionend, onwheel, onauxclick, ongotpointercapture, onlostpointercapture, onpointerdown, onpointermove, onpointerup, onpointercancel, onpointerover, onpointerout, onpointerenter, onpointerleave, onselectstart, onselectionchange, onanimationend, onanimationiteration, onanimationstart, ontransitionrun, ontransitionstart, ontransitionend, ontransitioncancel, onafterprint, onbeforeprint, onbeforeunload, onhashchange, onlanguagechange, onmessage, onmessageerror, onoffline, ononline, onpagehide, onpageshow, onpopstate, onrejectionhandled, onstorage, onunhandledrejection, onunload, ondevicemotion, ondeviceorientation, ondeviceorientationabsolute, onpointerrawupdate
```  
