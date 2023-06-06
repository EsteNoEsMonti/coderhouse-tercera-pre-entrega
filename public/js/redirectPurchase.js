// @ts-ignore
document.getElementById('pay-button').addEventListener('click', function() {
  var currentUrl = window.location.href;
  var purchaseUrl = currentUrl + '/purchase';
  window.location.href = purchaseUrl;
});

