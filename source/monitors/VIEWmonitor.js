import BaseMonitor from './BaseMonitor';
import { extend, createNode, appendTo, view } from './utils';

extend(VIEWmonitor, BaseMonitor);

function VIEWmonitor() {
    this.$panel = createNode('div', {
        className: 'x-panel VIEWmonitor',
    });
    let wpSize = view.getViewportSize(),
        bodySize = view.bodySize(),
        scrolling = view.scroll(),
        getVpSize = () => `<strong>VIEWPORT</strong><br/>${wpSize.width} * ${wpSize.height}`,
        getBodySize = () => `<strong>BODY</strong><br/>${bodySize[0]} * ${bodySize[1]}`,
        getScrolling = () => `<strong>SCROLLING</strong><br/>${scrolling.left} | ${scrolling.top}`;

    var $viewportSize = createNode('li', { html: getVpSize() }),
        $bodySize = createNode('li', { html: getBodySize() }),
        $bodyScroll = createNode('li', { html: getScrolling() }),
        $list = createNode('ul');

    appendTo($list, [$viewportSize, $bodySize, $bodyScroll]);
    appendTo(this.$panel, [$list]);

    window.addEventListener('resize', function() {
        wpSize = view.getViewportSize();
        bodySize = view.bodySize();
        $viewportSize.innerHTML = getVpSize();
        $bodySize.innerHTML = getBodySize();
    })
    window.addEventListener('scroll', function() {
        scrolling = view.scroll();
        $bodyScroll.innerHTML = getScrolling();
    })
}

export default VIEWmonitor;