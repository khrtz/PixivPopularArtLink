chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete' && tab.url && tab.url.includes('pixiv.net')) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js']
            });
        }
    });
});
