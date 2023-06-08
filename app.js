/*const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
*/

function jump(h){
  var top = document.getElementById(h).offsetTop;
  window.scrollTo(0, top);
}