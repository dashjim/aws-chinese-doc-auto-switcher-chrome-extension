chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    var currentUrl = tab.url;
    var tabUrl = tab.url;
    if (currentUrl.includes("https://docs.aws.amazon.com") && !currentUrl.includes("/zh_cn/")) {
           var myNewUrl = tabUrl.replace("docs.aws.amazon.com", "docs.aws.amazon.com/zh_cn");
           chrome.tabs.update(tab.id, {url: myNewUrl});
           return;
    }
    if (currentUrl.includes("https://aws.amazon.com") && !currentUrl.includes("/cn/")) {
           var myNewUrl = tabUrl.replace("aws.amazon.com", "amazonaws-china.com/cn");
           chrome.tabs.update(tab.id, {url: myNewUrl});
           return;
    }
  }
);


