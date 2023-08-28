AOS.init({
  duration: 1500,
  offset:100,
});

const closeHandler = () => {
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.transform = "translateX(22rem)";
}
const closeBtn = document.querySelector('#closeBtn');
closeBtn.addEventListener('click', closeHandler);

const openHandler = () => {
  const sideBar = document.querySelector('.sideBar');
  sideBar.style.transform = "translateX(0rem)"
}
const openBtn = document.querySelector('#modileMenu');
openBtn.addEventListener('click', openHandler);

const closeBackdropHandler = () => {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = "none";
}

const closeBckdropBtn = document.querySelector('.closeBckdropBtn');
closeBckdropBtn.addEventListener('click', closeBackdropHandler);

const backdrop = document.querySelector('.backdrop');
backdrop.addEventListener('click', closeBackdropHandler);

$('document').ready(function() {
  $('.subscribeBtn').click(function(event) {
    event.preventDefault();
    $('.backdrop').show();
  });
});

