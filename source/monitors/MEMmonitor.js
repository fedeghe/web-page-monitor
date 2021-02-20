import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
function MEMmonitor(options = {}){
    this.panel = createNode('div', {
        className: 'mid-panel x-panel',
        text: 'MEMmonitor'
    });
    var total = createNode('li'),
        used = createNode('li'),
        limit = createNode('li'),
        list = createNode('ul'),
        factor = 2 ** 20;
    appendTo(list, [total, used, limit]);
    appendTo(this.panel, [list]);
    setInterval(function () {
        total.innerHTML = (performance.memory.totalJSHeapSize / factor).toFixed(2) + 'MB';
        used.innerHTML = (performance.memory.usedJSHeapSize / factor).toFixed(2) + 'MB';
        limit.innerHTML = (performance.memory.jsHeapSizeLimit / factor).toFixed(2) + 'MB';
    }, options.frequency ? 1000 / options.frequency : 1000)

}
extend(MEMmonitor, BaseMonitor);
export default MEMmonitor;