var Monitor = (function() {

    function extend(Child, Parent) {
        function T () {}
        T.prototype = Parent.prototype;
        Child.prototype = new T();
        Child.prototype.constructor = Child;
        Child.superClass = Parent.prototype;
        Child.baseConstructor = Parent;
        Child.super = function (inst) {
            var args = [].slice.call(arguments, 1);
            Parent.apply(inst, args);
        };
    }

    var PanelFactory = {
        create: function (type) {
            switch(type) {
                case 'fps': return new FPSmonitor();
                case 'mem': return new MEMmonitor();
                case 'tags': return new TAGSmonitor();
            }
        }
    };


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


    


    function BasePanel() {
        this.appended = false
    }
    BasePanel.prototype.render = function (where) {
        this.appended = true
        where.appendChild(this.panel)
    }

    function FPSmonitor(){
        this.panel = document.createElement('div');
        this.panel.className = 'high-panel x-panel';
        this.panel.innerHTML = 'FPSmonitor';
    }

    function MEMmonitor(){
        this.panel = document.createElement('div');
        this.panel.className = 'mid-panel x-panel';
        this.panel.innerHTML = 'MEMmonitor';
    }

    function TAGSmonitor(){
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
    extend(FPSmonitor, BasePanel);
    extend(MEMmonitor, BasePanel);
    extend(TAGSmonitor, BasePanel);

    var m = new Monitor()

    function showMEM(){
        m.addPanel('mem');
        
    }
    function showFPS(){
        m.addPanel('fps');
        
    }
    function showTAGS(){
        m.addPanel('tags');
       
    }
    function render(){
        m.render(document.body)
    }


    return {
        showFPS,
        showMEM,
        showTAGS,
        render,
    }
})();