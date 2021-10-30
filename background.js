function goToLinkedin() {
  alert("Go to https://www.linkedin.com/mynetwork/invitation-manager/")
}
chrome.action.onClicked.addListener((tab) => {
    // console.log(tab);
    var url = tab.url;
    if(url.includes("linkedin.com/mynetwork")){
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    } else {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: goToLinkedin
      });
    }
  }
);