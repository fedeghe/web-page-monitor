# web-page-monitor (work in progress)

### install
``` sh
// yarn add web-page-monitor

NOT JET: es4, es2020, umd authoring is not ready
```

### use it
```
import Monitor from 'web-page-monitor'

Monitor.showFPS()
    .showMEM()
    .showTAGS()
    .showEVENTS({
        frequency: 1,
        exclude: [
            'onmousemove',
        ]
    })
    .render();
```

<details>
<summary>list of event for <i>EventMonitor</i> (webkit)</summary>  

```
onsearch, onappinstalled, onbeforeinstallprompt, onabort, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, onformdata, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting, onwebkitanimationend, onwebkitanimationiteration, onwebkitanimationstart, onwebkittransitionend, onwheel, onauxclick, ongotpointercapture, onlostpointercapture, onpointerdown, onpointermove, onpointerup, onpointercancel, onpointerover, onpointerout, onpointerenter, onpointerleave, onselectstart, onselectionchange, onanimationend, onanimationiteration, onanimationstart, ontransitionrun, ontransitionstart, ontransitionend, ontransitioncancel, onafterprint, onbeforeprint, onbeforeunload, onhashchange, onlanguagechange, onmessage, onmessageerror, onoffline, ononline, onpagehide, onpageshow, onpopstate, onrejectionhandled, onstorage, onunhandledrejection, onunload, ondevicemotion, ondeviceorientation, ondeviceorientationabsolute, onpointerrawupdate
```  
</details>