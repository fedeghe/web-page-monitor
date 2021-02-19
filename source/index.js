import Monitor from './Monitor'
import './style.less'

window.Monitor = (function() {
    var m = new Monitor();
    return {
        showFPS: () => m.addPanel('fps'),
        showMEM: () => m.addPanel('mem'),
        showTAGS: () => m.addPanel('tags'),
        showEVENTS: () => m.addPanel('events'),
        render: () => m.render(document.body),
    };
})();
