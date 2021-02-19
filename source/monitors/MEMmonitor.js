import BaseMonitor from './BaseMonitor'
import {extend} from './../utils'
function MEMmonitor(){
    this.panel = document.createElement('div');
    this.panel.className = 'mid-panel x-panel';
    this.panel.innerHTML = 'MEMmonitor';
}
extend(MEMmonitor, BaseMonitor);
export default MEMmonitor