import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
function FPSmonitor(options = {}){
    this.panel = createNode('div',{
        className: 'high-panel x-panel',
        text: 'FPSmonitor'
    });
    var $fps = createNode('span')
    const times = [];
    let fps;

    appendTo(this.panel, [$fps]);

    (function _() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
            }
            times.push(now);
            fps = times.length;
            $fps.innerHTML = fps;
            _();
        });
    })();
}
extend(FPSmonitor, BaseMonitor);
export default FPSmonitor;