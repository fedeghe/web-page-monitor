


import './style.less'

import Monitor from './Monitor'


window.Monitor = (function() {



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