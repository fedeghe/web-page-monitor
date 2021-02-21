import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';
import NETWORKmonitor from './monitors/NETWORKmonitor';

var PanelFactory = (type, params) => {

    switch(type) {
        case 'fps': return new FPSmonitor(params);
        case 'mem': return new MEMmonitor(params);
        case 'tags': return new TAGSmonitor(params);
        case 'net': return new NETWORKmonitor(params);
        case 'events': return new EVENTSmonitor(params);
        default: return null;
    }
};

export default PanelFactory