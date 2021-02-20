import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
function TAGSmonitor(options = {}) {
    this.panel = createNode('div', {
        className: 'small-panel x-panel',
    });
    var title = createNode('span', {text: 'TAGSmonitor: '}),
        num = createNode('span'),
        canvas = createNode('canvas', {
            attributes: {
                width: 50,
                height: 25
            }
        });
    
    appendTo(this.panel, [title, num, canvas]);
    
    setInterval(function () {
        var nodes = document.getElementsByTagName('*'),
            l = nodes.length;
        num.innerHTML = l;
    }, options.frequency ? 1000 / options.frequency : 1000);
}
extend(TAGSmonitor, BaseMonitor);
export default TAGSmonitor