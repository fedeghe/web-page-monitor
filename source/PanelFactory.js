import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';
import NETWORKmonitor from './monitors/NETWORKmonitor';
import VIEWmonitor from './monitors/VIEWmonitor';
import LOADmonitor from './monitors/LOADmonitor';

var PanelFactory = (type, params, monitor) => {

    switch (type) {
        case 'fps':
            return new FPSmonitor(params, monitor);
        case 'mem':
            return new MEMmonitor(params, monitor);
        case 'tags':
            return new TAGSmonitor(params, monitor);
        case 'net':
            return new NETWORKmonitor(params, monitor);
        case 'events':
            return new EVENTSmonitor(params, monitor);
        case 'view':
            return new VIEWmonitor(params, monitor);
        case 'load':
            return new LOADmonitor(params, monitor);
        default:
            return null;
    }
};

export default PanelFactory