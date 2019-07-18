var button = document.querySelector(".cta-select");
var login = document.querySelector('#login');
var back = document.querySelector(".cta-succ");
var image = document.querySelector('#banner');
var main = document.querySelector('#main');
var nav = document.querySelector('#nav');
var logo = document.querySelector('#logo');

button.addEventListener('click', showLogin, false);
back.addEventListener('click', hideLogin, false);

function showLogin(e){
  login.classList.add('show');
  main.classList.add('show');
  nav.classList.add('show');
  logo.classList.add('show');
  image.classList.add('show');

  login.classList.remove('hide');
  main.classList.remove('hide');
  nav.classList.remove('hide');
  logo.classList.remove('hide');
  image.classList.remove('hide');

  document.body.style.overflow = "hidden";


}

function hideLogin(e){
  login.classList.remove('show');
  main.classList.remove('show');
  nav.classList.remove('show');
  logo.classList.remove('show');
  image.classList.remove('show');

  login.classList.add('hide');
  main.classList.add('hide');
  nav.classList.add('hide');
  logo.classList.add('hide');
  image.classList.add('hide');

  e.stopPropagation();

  document.body.style.overflow = "auto";


}
