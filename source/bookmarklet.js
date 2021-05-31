(function() {
    'SecurityPolicyViolationEvent' in window
        &&
        window.addEventListener('securitypolicyviolation', function(e) {
            switch (e.type) {
                case 'securitypolicyviolation':
                    alert('Impossible to inject the monitor due to CSP (content security policy)');
                    break;
            }
        });

    var url = "https://cdn.jsdelivr.net/npm/web-page-monitor@0.0.15/dist/index.js",
        script = document.createElement('script');
    script.onload = function() {
        var already = document.querySelectorAll('.monitor-panel, .monitor-panel-hidden').length
        if (!already) {
            WebPageMonitor
                .showNET()
                .showFPS()
                .showMEM({
                    height: 30,
                })
                .showTAGS({
                    frequency: 10,
                })
                .showEVENTS({
                    frequency: 10,
                    exclude: [
                        'onmousemove',
                    ]
                })
                .showVIEW()
                .render({
                    collapsible: true
                });
        }
    };
    script.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(script);
})();

// javascript:void(function(){'SecurityPolicyViolationEvent'%20in%20window%20%26%26%20window.addEventListener('securitypolicyviolation'%2C%20function(e)%20%7B%20switch%20(e.type)%20%7B%20case%20'securitypolicyviolation'%3A%20alert('Impossible%20to%20inject%20the%20monitor%20due%20to%20CSP%20(content%20security%20policy)')%3B%20break%3B%20%7D%7D)%3Bvar%20url%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fweb-page-monitor%400.0.14%2Fdist%2Findex.js%22%2C%20script%20%3D%20document.createElement('script')%3Bscript.onload%20%3D%20function()%20%7BWebPageMonitor.showNET().showFPS().showMEM(%7Bheight%3A%2030%2C%7D).showTAGS(%7Bfrequency%3A%2010%2C%7D).showEVENTS(%7Bfrequency%3A%2010%2Cexclude%3A%20%5B'onmousemove'%2C%5D%7D).showVIEW().render(%7Bcollapsible%3A%20true%7D)%3B%7D%3Bscript.setAttribute('src'%2C%20url)%3Bdocument.getElementsByTagName('head').item(0).appendChild(script)%3B}())