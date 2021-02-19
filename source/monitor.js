import PanelFactory from './PanelFactory'

function Monitor() {
    this.container = document.createElement('div');
    this.container.className = 'monitor-panel';
    this.panels = []
}

Monitor.prototype.addPanel = function (type) {
    this.panels.push(PanelFactory.create(type))
};

Monitor.prototype.render = function (where) {
    this.container.innerHTML = '';
    var self = this;
    this.panels.forEach(function (panel) {
        panel.render(self.container)
    })
    where.appendChild(this.container)
};

export default Monitor