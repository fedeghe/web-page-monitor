import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
import Canvas from './canvas'
import './style.less'
function MEMmonitor(options = {}){
    this.$panel = createNode('div', {
        className: 'mid-panel x-panel MEMmonitor',
    });
    var $title = createNode('div', {text: 'MEM', className: 'title'}),
        $total = createNode('li'),
        cnvTotal = new Canvas({width: 140, height: options.height || 50, options}),
        $used = createNode('li'),
        cnvUsed = new Canvas({width: 140, height: options.height || 50, options}),
        $limit = createNode('li'),
        $list = createNode('ul'),
        factor = 2 ** 20;
    appendTo($list, [$title, $total, cnvTotal.getTag(), $used, cnvUsed.getTag(), $limit]);
    appendTo(this.$panel, [$list]);
    setInterval(function () {
        var total = (performance.memory.totalJSHeapSize / factor).toFixed(2),
            used = (performance.memory.usedJSHeapSize / factor).toFixed(2);
        $total.innerHTML = `Total: ${total}MB`;
        $used.innerHTML = `Used: ${used}MB`;
        $limit.innerHTML = `Limit: ${(performance.memory.jsHeapSizeLimit / factor).toFixed(2)}MB`;
        cnvTotal.add(total);
        cnvUsed.add(used);
    }, options.frequency ? 1000 / options.frequency : 1000);

}
extend(MEMmonitor, BaseMonitor);
export default MEMmonitor;