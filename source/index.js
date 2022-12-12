import Monitor from './Monitor'
import './style.less'

(function() {
    function getPanelInjector (lab) {
        return function(options) {
            m.addPanel(lab, options);
            return out;
        }
    }
    var m = new Monitor(),
        out = {
            showFPS: getPanelInjector('fps'),
            showMEM: getPanelInjector('mem'),
            showTAGS: getPanelInjector('tags'),
            showEVENTS: getPanelInjector('events'),
            showNET: getPanelInjector('net'),
            showVIEW: getPanelInjector('view'),
            render: (options = {}) => m.render(options),
        };
    window.WebPageMonitor = out;
})();