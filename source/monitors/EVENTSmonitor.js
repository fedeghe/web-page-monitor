import BaseMonitor from './BaseMonitor';
import {extend, createNode, appendTo, getFrequency} from './utils';
import Canvas from './canvas';
import Queue from './queue';

extend(EVENTSmonitor, BaseMonitor);

function EVENTSmonitor(options = {}){
    var self = this;
    this.min = Infinity;
    this.max = -Infinity;
    this.events = [];
    this.queue = new Queue(100);
    this.options = options;

    this.$panel = createNode('div', {
        className: 'x-panel',
    });
    this.$title = createNode('div', {text: 'EVENTS', className: 'title event'});
    this.$stats = createNode('div', {className: 'flexi'});
    this.$actual = createNode('span');
    this.$max = createNode('span');

    var cnv = new Canvas({width:140, height: options.height || 50, options});
    

    appendTo(this.$stats, [this.$actual, this.$max]);
    appendTo(this.$panel, [this.$title, this.$stats, cnv.getTag()]);
    this.listen();

    setInterval(function () {
        var actual = self.events.length;
        self.max = Math.max(self.max, actual)
        self.$actual.innerHTML = `Actual: ${actual}`;
        self.$max.innerHTML = `Max: ${self.max}`;
        self.events = [];
        cnv.add(actual);
    }, getFrequency(options.frequency));

}

EVENTSmonitor.prototype.add = function (e) {
    this.events.push(e);
};

EVENTSmonitor.prototype.listen = function () {
    var self = this;
    self.$title.addEventListener('click', function () {
        console.log(self.queue.getList());
    });
    Object.keys(window).forEach(key => {
        if ( /^on/.test(key)
            && (
                !self.options.exclude
                || self.options.exclude.indexOf(key) < 0
            )
        ) {
            window.addEventListener(key.slice(2), event => {
                self.queue.enqueue(event);
                self.add(event);
            }, true);
        }
    });
}



export default EVENTSmonitor;