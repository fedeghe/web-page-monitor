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

function createNode(tag, {
    className = false,
    text = false,
    html = false,
    attributes = {},
    childs = []
} = {}) {
    var n = document.createElement(tag)
    if (className) {
        n.className = className
    }
    if (text) {
        n.innerText = text
    }
    if (html) {
        n.innerHTML = html
    }
    childs.length && appendTo(n, childs)
    for (var attribute in attributes) {
        n.setAttribute(attribute, attributes[attribute])
    }
    return n
}

function appendTo(node, childs) {
    childs.forEach(child => {
        node.appendChild(child)
    })
}

export {
    extend,
    createNode,
    appendTo,
}