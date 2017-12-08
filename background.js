chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.remove(sender.tab.id);
});

var rateUrl = 'https://trade.taobao.com/trade/itemlist/list_sold_items.htm?action=itemlist/SoldQueryAction&event_submit_do_query=1&commentStatus=I_HAS_NOT_COMMENT&tabCode=waitRate';
chrome.tabs.create({ 'url': rateUrl, 'selected': false });
