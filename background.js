let triggeredTabs = {};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading" && tab.url && tab.url.includes("facebook.com")) {
    if (!triggeredTabs[tabId]) {
      triggeredTabs[tabId] = true;

      // Tampilkan notifikasi
      chrome.notifications.create({
        type: "basic",
        iconUrl: "favicon.ico",
        title: "VS Code Want You Ngoding",
        message: "Membuka VS Code Supaya Kalian Ngoding...",
        priority: 2
      });

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["content.js"]
      }, () => {
        chrome.tabs.sendMessage(tabId, { action: "clearPage" });
      });
      

      // Buka VS Code via protocol handler
      chrome.tabs.update(tabId, { url: "vscode:" });
    }
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  delete triggeredTabs[tabId];
});