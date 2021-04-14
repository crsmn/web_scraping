let btnscrap = document.getElementById("btnscrap");

btnscrap.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: scrapingProfile,
  });
});

function scrapingProfile() {
  console.log("Hola mundo");
}
