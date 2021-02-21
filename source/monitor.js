import PanelFactory from './PanelFactory';
function Monitor() {
    this.container = document.createElement('div');
    this.container.className = 'monitor-panel';
    this.panels = [];
    this.nodeCount = 0;
}

Monitor.prototype.addPanel = function (type, options) {
    this.panels.push(PanelFactory(type, options, this));
    return this;
};

Monitor.prototype.render = function (where) {
    this.container.innerHTML = '';
    var self = this;
    this.panels.forEach(function (panel) {
        panel.render(self.container, self);
    });
    where.appendChild(this.container);
    this.nodeCount = this.container.getElementsByTagName('*').length;
};

export default Monitor;