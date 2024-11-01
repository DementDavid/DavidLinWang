document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobilemenu = document.querySelector('.mobile-menu');
  function checkClickOutside(event) {
    if (!mobileMenuButton.contains(event.target) && !mobilemenu.contains(event.target)) {
      mobilemenu.classList.remove('open');
    }
  } 
  mobileMenuButton.addEventListener('click', function () {
    mobilemenu.classList.toggle('open');
  });
    document.addEventListener('click', checkClickOutside);
});
