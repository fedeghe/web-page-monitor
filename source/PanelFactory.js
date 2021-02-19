import FPSmonitor from './monitors/FPSmonitor'
import TAGSmonitor from './monitors/TAGSmonitor'
import MEMmonitor from './monitors/MEMmonitor'

var PanelFactory = {
    create: function (type) {
        switch(type) {
            case 'fps': return new FPSmonitor();
            case 'mem': return new MEMmonitor();
            case 'tags': return new TAGSmonitor();
        }
    }
};

export default PanelFactory