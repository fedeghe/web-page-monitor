import BaseMonitor from './BaseMonitor'
import {extend} from './../utils'
function FPSmonitor(){
    this.panel = document.createElement('div');
    this.panel.className = 'high-panel x-panel';
    this.panel.innerHTML = 'FPSmonitor';
}
extend(FPSmonitor, BaseMonitor);
export default FPSmonitor