/* ===========timer============*/

const timer = document.querySelector("#timer");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

let updateTimer = setInterval(function () {
  let now = new Date().getTime();
  let difference = countDownDate - now;
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

  hours.innerHTML = hoursDif;
  minutes.innerHTML = minutesDif;
  seconds.innerHTML = secondsDif;
  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Наступило";
  }
}, 1000);


/*==========slider=========== */

const swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

  }, effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true
  },
  thumbs: {
    swiper: {
      el: '.img-mini-slider',
      slidesPerView: 4, 
    }
  }
});


/*==========select=========== */

let select = function() {
let selectHeader = document.querySelectorAll('.select__header');
let selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach(element => {
  element.addEventListener('click', selectToggle);
});

selectItem.forEach(element => {
  element.addEventListener('click', selectChoose);
});

function selectToggle() {
  this.parentElement.classList.toggle('is-active');
}

function selectChoose() {
  let text = this.innerText;
  let select = this.closest('.select');
  let currentText = this.closest('.select').querySelector('.select__current');
  currentText.innerText = text;
  select.classList.remove('is-active');
}
}


select();

