// BURGER MENU 
// Quand l'utilisateur est sur téléphone, menu "hamburger"

const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  const headerList = document.querySelector('.menu-liste');

  burgerElement.classList.toggle('open');
  burgerElement.classList.toggle('close');

  headerList.classList.toggle('visible');
});

// HEADER (STICKY CLASS)
// fonction quand la fenêtre arrive au niveau du menu, celui ci prend la class sticky

window.onscroll = function() {myFunction()};

var header = document.getElementById("menu");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}