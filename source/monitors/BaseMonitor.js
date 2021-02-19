function BaseMonitor() {
    this.appended = false
}
BaseMonitor.prototype.render = function (where) {
    this.appended = true
    where.appendChild(this.panel)
}

export default BaseMonitor