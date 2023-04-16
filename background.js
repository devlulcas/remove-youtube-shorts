chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ state: 'HIDDEN' });

  chrome.action.setBadgeText({
    text: 'HIDDEN',
  });
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    await chrome.storage.sync.get('state', (result) => {
      if (result.state === 'HIDDEN') {
        toggleInjection(tabId, 'HIDDEN');
      } else {
        console.log('VISIBLE');
        toggleInjection(tabId, 'VISIBLE');
      }
    });
  }
});

chrome.action.onClicked.addListener(async (tab) => {
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });

  const nextState = prevState === 'HIDDEN' ? 'VISIBLE' : 'HIDDEN';

  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });

  chrome.storage.sync.set({ state: nextState });

  toggleInjection(tab.id, nextState);
});

async function toggleInjection(tabId, state) {
  const css = 'injectable.css';

  if (state === 'HIDDEN') {
    await chrome.scripting.insertCSS({
      files: [css],
      target: { tabId },
    });
  } else {
    await chrome.scripting.removeCSS({
      files: [css],
      target: { tabId },
    });
  }
}
