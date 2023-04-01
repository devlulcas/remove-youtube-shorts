const url = "https://www.youtube.com/";

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "VISIBLE",
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(url)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });

    const nextState = prevState === "HIDDEN" ? "VISIBLE" : "HIDDEN";

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    const css = "injectable.css";

    if (nextState === "HIDDEN") {
      await chrome.scripting.insertCSS({
        files: [css],
        target: { tabId: tab.id },
      });
    } else if (nextState === "VISIBLE") {
      await chrome.scripting.removeCSS({
        files: [css],
        target: { tabId: tab.id },
      });
    }
  }
});
