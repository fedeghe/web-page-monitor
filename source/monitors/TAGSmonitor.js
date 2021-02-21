import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
import './style.less';
import Canvas from './canvas';
function TAGSmonitor(options = {}, monitor) {
    this.$panel = createNode('div', {
        className: 'small-panel x-panel',
    });
    var $title = createNode('div', {text: 'TAGS', className: 'title'}),
        $num = createNode('span'),
        cnv = new Canvas({width: 140, height: options.height || 50, options});
    
    appendTo(this.$panel, [$title, $num, cnv.getTag()]);
    
    setInterval(function () {
        var nodes = document.getElementsByTagName('*'),
            l = nodes.length - monitor.nodeCount;
        $num.innerHTML = `: ${l}`;
        cnv.add(l);
    }, options.frequency ? 1000 / options.frequency : 1000);
}
extend(TAGSmonitor, BaseMonitor);
export default TAGSmonitor;