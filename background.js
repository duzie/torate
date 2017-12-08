chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].id === sender.tab.id) {
                chrome.tabs.remove(tabs[i].id);
            }
        }
    });
});
