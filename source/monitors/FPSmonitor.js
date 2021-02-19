import BaseMonitor from './BaseMonitor';
import {extend, createNode} from './utils';
function FPSmonitor(){
    this.panel = createNode('div',{
        className: 'high-panel x-panel',
        text: 'FPSmonitor'
    });
}
extend(FPSmonitor, BaseMonitor);
export default FPSmonitor;