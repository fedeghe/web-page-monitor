import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';

import Canvas from './canvas'

extend(EVENTSmonitor, BaseMonitor);
function EVENTSmonitor(options = {}){
    var self = this;
    this.max = 0;
    this.events = [];
    this.options = options

    this.panel = createNode('div', {
        className: 'small-panel x-panel',
    });
    this.$title = createNode('span', {text: 'EVENTSmonitor'});
    this.$num = createNode('span');

    var cnv = new Canvas(140, 50);

    appendTo(this.panel, [this.$title, this.$num, cnv.tag]);
    this.listen();

    setInterval(function () {
        var current = self.events.length;
        self.max = Math.max(self.max, current)
        self.$num.innerHTML = ` (${current} | max:${self.max})`;
        self.events = []
        cnv.add(current)
    }, options.frequency ? 1000 / options.frequency : 1000)

}

EVENTSmonitor.prototype.add = function (e) {
    this.events.push(e)
};
EVENTSmonitor.prototype.listen = function () {
    var self = this;
    var t = Object.keys(window).reduce((acc,key) => {
        if (/^on/.test(key)) {
            acc.push(key)
        }
        return acc
    }, [])
    console.log(t.join(','))
    Object.keys(window).forEach(key => {
        
        if ( /^on/.test(key)
            && (
                !self.options.exclude
                || self.options.exclude.indexOf(key) < 0
            )
        ) {
            window.addEventListener(key.slice(2), event => {
                self.add(event);
            }, true);
        }
    });
}



export default EVENTSmonitor;