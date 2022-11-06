import BaseMonitor from './BaseMonitor';
import {
    extend,
    createNode,
    appendTo
} from './utils';

function NETWORKmonitor(options = {}) {
    this.$panel = createNode('div', {
        className: 'x-panel',
    });
    var $title = createNode('div', {
            text: 'NETWORK',
            className: 'title'
        }),
        $total = createNode('div'),
        factor = 2 ** 20;
    appendTo(this.$panel, [$title, $total]);
    setInterval(function() {
        var entries = performance.getEntries(),
            total = entries.reduce((acc, entry) => acc + (entry.transferSize || 0), 0);
        $total.innerHTML = `Total: ${(total / factor).toFixed(2)} MB`;
    }, options.frequency ? 1000 / options.frequency : 1000);

}

extend(NETWORKmonitor, BaseMonitor);

export default NETWORKmonitor;