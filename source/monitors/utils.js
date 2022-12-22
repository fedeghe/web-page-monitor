import loadEventsMap from './loadEventsMap.json'

function extend(Child, Parent) {
    function T() {}
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    Child.prototype.constructor = Child;
    Child.superClass = Parent.prototype;
    Child.baseConstructor = Parent;
    Child.super = function(inst) {
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

// retruns the parent
function appendTo(node, childs) {
    childs.forEach(child => {
        node.appendChild(child)
    })
    return node
}

function getFrequency(f) {
    return f ? 1000 / f : 1000
}

const w = window,
    wd = w.document,
    wdb = wd.body,
    wde = wd.documentElement;
const view = {
    getViewportSize: function() {
        if (typeof w.innerWidth !== 'undefined') {
            return {
                width: w.innerWidth,
                height: w.innerHeight
            };
        } else {
            if (typeof wde !== 'undefined' &&
                typeof wde.clientWidth !== 'undefined' &&
                wde.clientWidth !== 0
            ) {
                return {
                    width: wde.clientWidth,
                    height: wde.clientHeight
                };
            } else {
                return {
                    width: wd.getElementsByTagName('body')[0].clientWidth,
                    height: wd.getElementsByTagName('body')[0].clientHeight
                };
            }
        }
    },
    bodySize: function() {
        var body = wd.body,
            html = wde;
        return [
            wd.getElementsByTagName('html')[0].clientWidth,
            Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        ];
    },
    pint : function(n) {return parseInt(n, 10);},
    scroll: function() {
        return {
            left: view.pint(view.f_filterResults(
                w.pageXOffset ? w.pageXOffset : 0,
                wde ? wde.scrollLeft : 0,
                wdb ? wdb.scrollLeft : 0
            )),
            top: view.pint(view.f_filterResults(
                w.pageYOffset ? w.pageYOffset : 0,
                wde ? wde.scrollTop : 0,
                wdb ? wdb.scrollTop : 0
            ))
        };
    },
    f_filterResults: function(nWin, nDocel, nBody) {
        var nResult = nWin || 0;
        if (nDocel && (!nResult || (nResult > nDocel))) {
            nResult = nDocel;
        }
        return nBody && (!nResult || (nResult > nBody)) ? nBody : nResult;
    },
    getLoadTimes : function (els) {
        var first,
            shown = els || [];
        return Object.entries(loadEventsMap).map(([key, label]) => {
            var p = performance.timing[key];
            first = first || p;
            return (!isNaN(p) && p) ? [key, label, p-first] : false;
        })
        .filter(e => e && shown.includes(e[0]))
        .sort((a, b) => a[2] - b[2]);
    }
}
export {
    extend,
    createNode,
    appendTo,
    view,
    getFrequency,
}