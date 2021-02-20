import Monitor from './Monitor'
import './style.less'

window.Monitor = (function() {
    var m = new Monitor();
    var out = {
        showFPS: options => {m.addPanel('fps', options); return out;},
        showMEM: options => {m.addPanel('mem', options); return out;},
        showTAGS: options => {m.addPanel('tags', options); return out;},
        showEVENTS: options => {m.addPanel('events', options); return out;},
        showNET: options => {m.addPanel('net', options); return out;},
        render: () => m.render(document.body),
    };
    return out;
})();
