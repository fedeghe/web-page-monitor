import BaseMonitor from './BaseMonitor';
import { extend, createNode, appendTo, view } from './utils';

extend(LOADmonitor, BaseMonitor);

function LOADmonitor(options = {}) {
    this.$panel = createNode('div', {
        className: 'x-panel LOADmonitor',
    });
    var loadTimes,
        $title = createNode('span', {text: 'LOAD TIMES', className: 'title'}),
        $list = createNode('ul');

    appendTo(this.$panel, [$title, $list]);
    loadTimes = view.getLoadTimes(options.elements);
    appendTo($list, loadTimes.map(lt => 
        appendTo(createNode('li', {className: 'loadMonitorItem' }), [
            createNode('span', { html: lt[1], className: 'loadMonitorLabel' }),
            createNode('span', { html: lt[2], className: 'loadMonitorValue' })
        ])
    ));
}

export default LOADmonitor;