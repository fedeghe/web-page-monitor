+function () {
    try {
        var url = "https://cdn.jsdelivr.net/npm/web-page-monitor@0.0.11/dist/index.js",
            script = document.createElement('script');
        script.onload = function () {
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
                .render({
                    collapsible: true
                });
        };
        script.setAttribute('src', url);
        document.getElementsByTagName('head').item(0).appendChild(script);
    } catch (e) {
        alert('Can`t inject script, most likely due to Content-Security-Policy')
    }
}();

// javascript:void(function(){%2Bfunction%20()%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20var%20url%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fweb-page-monitor%400.0.11%2Fdist%2Findex.js%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20script%20%3D%20document.createElement('script')%3B%0A%20%20%20%20%20%20%20%20script.onload%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20WebPageMonitor%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.showNET()%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.showFPS()%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.showMEM(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.showTAGS(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20frequency%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.showEVENTS(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20frequency%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20exclude%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'onmousemove'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20.render(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20collapsible%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20script.setAttribute('src'%2C%20url)%3B%0A%20%20%20%20%20%20%20%20document.getElementsByTagName('head').item(0).appendChild(script)%3B%0A%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20alert('Can%60t%20inject%20script%2C%20most%20likely%20due%20to%20Content-Security-Policy')%0A%20%20%20%20%7D%0A%7D()%3B}())