import PanelFactory from './PanelFactory';

function Monitor() {
    var self = this;
    this.container = document.createElement('div');
    this.toggler = document.createElement('div');
    this.container.className = 'monitor-panel';
    this.toggler.className = 'monitor-panel-toggler';
    this.panels = [];
    this.nodeCount = 0;
    this.visible = true;
    this.toggler.addEventListener('click', function() {
        if (self.visible) {
            self.container.className = 'monitor-panel-hidden';
            self.toggler.className = 'monitor-panel-toggler-hidden';
        } else {
            self.container.className = 'monitor-panel';
            self.toggler.className = 'monitor-panel-toggler';
        }
        self.visible = !self.visible
    })
}

Monitor.prototype.addPanel = function(type, options) {
    this.panels.push(PanelFactory(type, options, this));
    return this;
};

Monitor.prototype.render = function({
    where = document.body,
    collapsible,
    opacity = 1
}) {
    var self = this;
    this.container.innerHTML = '';
    this.container.style.opacity = opacity;
    if (collapsible) {
        self.container.appendChild(this.toggler);
    }
    this.panels.forEach(function(panel) {
        panel.render(self.container, self);
    });
    where.appendChild(this.container);
    this.nodeCount = this.container.getElementsByTagName('*').length + 1; // the container
};

export default Monitor;