
const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  const headerList = document.querySelector('.menu-liste');

  burgerElement.classList.toggle('open');
  burgerElement.classList.toggle('close');

  headerList.classList.toggle('visible');
});

