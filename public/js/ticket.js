// @ts-ignore
document.getElementById('back-to-cart').addEventListener('click', () => {
  const currentURL = window.location.href;
  const redirectTo = currentURL.replace('/purchase', '');
  window.location.href = redirectTo;
});
