document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobilemenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobilemenu.classList.toggle('open');
  });
});
