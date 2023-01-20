function Queue(l) {
    this.queueLenght = l || 10;
    this.queue = Array.from({length: this.queueLenght});
    this.queueIndex = 0;
}
Queue.prototype.enqueue = function (e) {
    this.queue[this.queueIndex] = e;
    this.queueIndex = (this.queueIndex + 1) % this.queueLenght;
}
Queue.prototype.clear = function (e) {
    this.queueIndex = 0;
    this.queue = Array.from({length: this.queueLenght});
}
Queue.prototype.getList = function () {
    const self = this;
    return this.queue.map(((_, i) => self.queue[(i + self.queueIndex) % self.queueLenght]));
}

export default Queue;