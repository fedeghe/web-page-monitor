import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
import './style.less'
function MEMmonitor(options = {}){
    this.panel = createNode('div', {
        className: 'mid-panel x-panel MEMmonitor',
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
        total.innerHTML = `Total: ${(performance.memory.totalJSHeapSize / factor).toFixed(2)}MB`;
        used.innerHTML = `Used: ${(performance.memory.usedJSHeapSize / factor).toFixed(2)}MB`;
        limit.innerHTML = `Limit: ${(performance.memory.jsHeapSizeLimit / factor).toFixed(2)}MB`;
    }, options.frequency ? 1000 / options.frequency : 1000)

}
extend(MEMmonitor, BaseMonitor);
export default MEMmonitor;