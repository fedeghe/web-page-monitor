import BaseMonitor from './BaseMonitor';
import { extend, createNode, appendTo } from './utils';

extend(VIEWmonitor, BaseMonitor);

const w = window,
    wd = w.document,
    wde = wd.documentElement;
const scan = {
    getViewportSize: function() {
        if (typeof w.innerWidth !== 'undefined') {
            return {
                width: w.innerWidth,
                height: w.innerHeight
            };
        } else {
            if (typeof wde !== 'undefined' &&
                typeof wde.clientWidth !== 'undefined' &&
                wde.clientWidth !== 0
            ) {
                return {
                    width: wde.clientWidth,
                    height: wde.clientHeight
                };
            } else {
                return {
                    width: wd.getElementsByTagName('body')[0].clientWidth,
                    height: wd.getElementsByTagName('body')[0].clientHeight
                };
            }
        }
    },

    bodySize: function() {
        var body = wd.body,
            html = wde;
        return [
            wd.getElementsByTagName('html')[0].clientWidth,
            Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        ];
    },
}



function VIEWmonitor(options = {}) {
    this.$panel = createNode('div', {
        className: 'x-panel VIEWmonitor',
    });
    let wpSize = scan.getViewportSize(),
        bodySize = scan.bodySize(),
        getVpSize = () => `wp:\n${wpSize.width} * ${wpSize.height}`,
        getBodySize = () => `body:\n${bodySize[0]} * ${bodySize[1]}`;

    var $title = createNode('div', { text: 'VIEW', className: 'title' }),
        $viewportSize = createNode('li', { html: getVpSize() }),
        $bodySize = createNode('li', { html: getBodySize() }),
        $list = createNode('ul');

    appendTo($list, [$viewportSize, $bodySize]);
    appendTo(this.$panel, [$title, $list]);

    window.addEventListener('resize', function() {
        wpSize = scan.getViewportSize();
        bodySize = scan.bodySize();
        $viewportSize.innerHTML = getVpSize();
        $bodySize.innerHTML = getBodySize();
    })

}


export default VIEWmonitor;