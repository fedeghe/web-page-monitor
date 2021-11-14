import Monitor from './Monitor'
import './style.less'

(function() {
    var m = new Monitor(),
        out = {
            showFPS: options => { m.addPanel('fps', options); return out; },
            showMEM: options => { m.addPanel('mem', options); return out; },
            showTAGS: options => { m.addPanel('tags', options); return out; },
            showEVENTS: options => { m.addPanel('events', options); return out; },
            showNET: options => { m.addPanel('net', options); return out; },
            showVIEW: options => { m.addPanel('view', options); return out; },
            render: (options = {}) => m.render(options),
        };
    window.WebPageMonitor = out;
})();