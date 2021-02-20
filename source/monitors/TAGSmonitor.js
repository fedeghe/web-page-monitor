import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
import Canvas from './canvas'
function TAGSmonitor(options = {}) {
    this.panel = createNode('div', {
        className: 'small-panel x-panel',
    });
    var title = createNode('b', {text: 'TAGSmonitor: '}),
        num = createNode('span')
    var cnv = new Canvas(140, 50);
    
    appendTo(this.panel, [title, num, cnv.tag]);
    
    setInterval(function () {
        var nodes = document.getElementsByTagName('*'),
            l = nodes.length;
        num.innerHTML = `${l}`;
        cnv.add(l);
    }, options.frequency ? 1000 / options.frequency : 1000);
}
extend(TAGSmonitor, BaseMonitor);
export default TAGSmonitor