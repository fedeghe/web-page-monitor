import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';
import NETWORKmonitor from './monitors/NETWORKmonitor';
import VIEWmonitor from './monitors/VIEWmonitor';
import LOADmonitor from './monitors/LOADmonitor';

var PanelFactory = (type, params, monitor) => {
    var Constructor = {
        fps: FPSmonitor,
        mem: MEMmonitor,
        tags: TAGSmonitor,
        net: NETWORKmonitor,
        events: EVENTSmonitor,
        view: VIEWmonitor,
        load: LOADmonitor,
    }[type] || null;
    return Constructor && new Constructor(params, monitor);
};

export default PanelFactory