import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';
import NETWORKmonitor from './monitors/NETWORKmonitor';
import VIEWmonitor from './monitors/VIEWmonitor';
import LOADmonitor from './monitors/LOADmonitor';

var PanelFactory = (type, params, monitor) => {
    var Constructors = {
        fps: FPSmonitor,
        tags: TAGSmonitor,
        net: NETWORKmonitor,
        events: EVENTSmonitor,
        view: VIEWmonitor,
        load: LOADmonitor,
    }
    if ('performance' in window &&  'memory' in performance){
        Constructors.mem = MEMmonitor
    }

    return type in Constructors
        ? new Constructors[type](params, monitor)
        : null;
};

export default PanelFactory