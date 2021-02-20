import {createNode} from './utils'

function Canvas(w, h) {
    this.width = w;
    this.height = h;
    this.tag = createNode('canvas', {
        attributes: {
            width: w,
            height: h
        }
    });
    this.ctx = this.tag.getContext('2d');
    this.ctx.fillStyle = 'black';
    this.ctx.strokeStyle = "#00FF00";
    this.data = [];
    this.normalized = [];
    this.max = 0;
}
Canvas.prototype.clear = function () {
    this.ctx.fillRect(0, 0, this.width, this.height);
};

Canvas.prototype.normalize = function (value) {
    return this.max ? value * this.height / this.max : this.height;
};
Canvas.prototype.add = function (value) {
    this.data.push(value);

    var self = this,
        normalizedTempValue = this.normalize(value),
        newMax = this.data.reduce((acc, v) => acc > v ? acc : v, 0),
        dataLen = this.data.length,
        beginSlice = dataLen > this.width ? 1 : 0;

    this.data = this.data.slice(beginSlice);

    if (newMax !== this.max) {
        this.normalized = this.data.map(self.normalize.bind(self));
        this.max = newMax;
    } else {
        this.normalized.push(normalizedTempValue);
    }
    this.normalized = this.normalized.slice(beginSlice);
    this.render();
};
Canvas.prototype.getTag = function () {
    return this.tag;
};
Canvas.prototype.render = function () {
    var self = this;
    this.clear();
    this.normalized.forEach((d, i) => {
        self.ctx.beginPath();
        this.ctx.strokeStyle = "rgba(0,256,0, 0.5)";
        self.ctx.moveTo(i, self.height);
        self.ctx.lineTo(i, self.height - d);
        self.ctx.stroke();
    })
};

export default Canvas;