import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo, getFrequency} from './utils';
import Canvas from './canvas';

extend(TAGSmonitor, BaseMonitor);

function TAGSmonitor(options = {}, monitor) {
    this.$panel = createNode('div', {
        className: 'x-panel',
    });
    var $title = createNode('div', {text: 'TAGS: ', className: 'title'}),
        $total = createNode('span'),
        $cnt = createNode('div', {className: 'flexi'}),
        $num = createNode('div'),
        $density = createNode('div'),
        cnv = new Canvas({width: 140, height: options.height || 50, options}),
        factor = document.body.clientHeight * document.body.clientWidth,
        nodes = document.getElementsByTagName('*'),
        bodyNodes = document.body.getElementsByTagName('*');
    
    appendTo($title, [$total]);
    appendTo($cnt, [$num, $density]);
    appendTo(this.$panel, [$title, $cnt, cnv.getTag()]);
    
    setInterval(function () {
        var monitorCount = monitor.nodeCount,
            total = nodes.length - monitorCount,
            totalBody = bodyNodes.length - monitorCount,
            rawDensity = totalBody / factor,
            m = `${rawDensity}`.match(/(\d\.\d).*(e-\d*)/),
            density = m ? `${m[1]}*${m[2]}`: rawDensity.toExponential(2);

        $total.innerHTML = total;
        $num.innerHTML = `body ${totalBody}`;
        $density.innerHTML = `∂ ${density}`
        cnv.add(totalBody);
    }, getFrequency(options.frequency));
}


export default TAGSmonitor;