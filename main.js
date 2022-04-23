// BURGER MENU 

const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  const headerList = document.querySelector('.menu-liste');

  burgerElement.classList.toggle('open');
  burgerElement.classList.toggle('close');

  headerList.classList.toggle('visible');
});

// HEADER (STICKY CLASS)

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}