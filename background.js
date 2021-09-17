chrome.contextMenus.create({
  id: "slangid",
  contexts: ["selection"],
  title: "Discover '%s' on Urban Dictionary",
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "slangid") {
    console.log("Attempting to search for " + info.selectionText + "...");
    const formattedWord = encodeURI(info.selectionText);
    chrome.tabs.create({
      url: "https://www.urbandictionary.com/define.php?term=" + formattedWord,
    });
    console.log("Successfully searched for " + info.selectionText + "!");
  }
});
