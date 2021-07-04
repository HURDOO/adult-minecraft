chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: 'window.location.href = "http://www.warning.or.kr/i3.html";'
        // http://www.warning.or.kr/i3.html
    });
}, {
    url: [{
        // Runs on example.com, example.net, but also example.foo.com
        hostContains: '.minecraft.'
    }],
});