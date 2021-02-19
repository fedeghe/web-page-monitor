import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';

function EVENTSmonitor(){

    this.panel = createNode('div', {
        className: 'high-panel x-panel',
    });
    var title = createNode('span', {text: 'EVENTSmonitor: '}),
        num = createNode('span');


    appendTo(this.panel, [title, num]);
}
extend(EVENTSmonitor, BaseMonitor);
export default EVENTSmonitor;