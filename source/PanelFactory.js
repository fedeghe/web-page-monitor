import FPSmonitor from './monitors/FPSmonitor';
import TAGSmonitor from './monitors/TAGSmonitor';
import MEMmonitor from './monitors/MEMmonitor';
import EVENTSmonitor from './monitors/EVENTSmonitor';

var PanelFactory = (type, params) => {

    switch(type) {
        case 'fps': return new FPSmonitor(params);
        case 'mem': return new MEMmonitor(params);
        case 'tags': return new TAGSmonitor(params);
        case 'events': {
            console.log('options2', params)
            return new EVENTSmonitor(params);
        }
        default: return null;
    }
};

export default PanelFactory