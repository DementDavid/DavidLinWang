document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('#mobile-menu-button');
  const topnav = document.querySelector('.topnav');

  mobileMenuButton.addEventListener('click', function () {
    topnav.classList.toggle('open');
  });
});
