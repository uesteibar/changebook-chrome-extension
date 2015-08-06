chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('hola', $('#productTitle').text());
  sendResponse($('#productTitle').text());
});
