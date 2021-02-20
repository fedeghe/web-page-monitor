import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
import Canvas from './canvas';
import './style.less';
function FPSmonitor(options = {}){
    this.$panel = createNode('div', {
        className: 'high-panel x-panel',
    });
    const $title = createNode('span', {text: 'FPS', className: 'title'}),
        $fps = createNode('span'),
        $cnv = new Canvas(140, options.height  || 50),
        times = [];

    let fps;

    appendTo(this.$panel, [$title, $fps, $cnv.getTag()]);

    (function _() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
            }
            times.push(now);
            var l = times.length;
            fps = l > 60 ? 60 : l;
            $fps.innerHTML = `: ${fps} fps`;
            $cnv.add(fps);
            _();
        });
    })();
}
extend(FPSmonitor, BaseMonitor);
export default FPSmonitor;