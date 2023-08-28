const scrollToSubscribe = () => {
  const element = document.getElementsByClassName('subscription');
  element[0].scrollIntoView({behavior: "smooth"});
};

const joinBtn = document.querySelector('.joinBtn');
joinBtn.addEventListener('click', scrollToSubscribe);