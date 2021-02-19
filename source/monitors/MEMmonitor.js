import BaseMonitor from './BaseMonitor';
import {extend, createNode} from './utils';
function MEMmonitor(){
    this.panel = createNode('div', {
        className: 'mid-panel x-panel',
        text: 'MEMmonitor'
    });
}
extend(MEMmonitor, BaseMonitor);
export default MEMmonitor;