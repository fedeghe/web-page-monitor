import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';

var PanelFactory = type => {

    switch(type) {
        case 'fps': return new FPSmonitor();
        case 'mem': return new MEMmonitor();
        case 'tags': return new TAGSmonitor();
        case 'events': return new EVENTSmonitor();
        default: return null;
    }
};

export default PanelFactory