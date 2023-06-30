const desplegable = document.querySelector('#desplegable');
const navCat = document.querySelector('#nav_cat');

desplegable.addEventListener('click', function() {
  navCat.classList.toggle('hidden');
});