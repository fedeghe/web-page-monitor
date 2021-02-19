
import BaseMonitor from './BaseMonitor'
import {extend} from './../utils'
function TAGSmonitor() {
    this.panel = document.createElement('div');
    this.panel.className = 'small-panel x-panel';
    var title = document.createElement('span')
    title.innerHTML = 'TAGSmonitor: ';
    var num = document.createElement('span')
    this.panel.appendChild(title)
    this.panel.appendChild(num)
    setInterval(function () {
        var l = document.getElementsByTagName('*').length;
        num.innerHTML = l
    }, 500)
}
extend(TAGSmonitor, BaseMonitor);
export default TAGSmonitor