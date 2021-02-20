import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo} from './utils';

import Canvas from './canvas'

extend(EVENTSmonitor, BaseMonitor);
function EVENTSmonitor(options = {}){
    var self = this;
    this.min = Infinity;
    this.max = -Infinity;
    this.events = [];
    this.options = options

    this.$panel = createNode('div', {
        className: 'small-panel x-panel',
    });
    this.$title = createNode('div', {text: 'EVENTSmonitor', className: 'title'});
    this.$stats = createNode('div', {className: 'flexi'});
    this.$actual = createNode('span');
    this.$max = createNode('span');

    var cnv = new Canvas(140, options.height || 50);

    appendTo(this.$stats, [this.$actual, this.$max]);
    appendTo(this.$panel, [this.$title, this.$stats, cnv.getTag()]);
    this.listen();

    setInterval(function () {
        var actual = self.events.length;
        self.max = Math.max(self.max, actual)
        self.$actual.innerHTML = `Actual: ${actual}`;
        self.$max.innerHTML = `Max: ${self.max}`;
        self.events = []
        cnv.add(actual)
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