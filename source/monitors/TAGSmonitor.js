import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';
function TAGSmonitor() {
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
        var l = document.getElementsByTagName('*').length;
        num.innerHTML = l
    }, 500);
}
extend(TAGSmonitor, BaseMonitor);
export default TAGSmonitor