const randomBodyColor = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  if (intervalId) {
    return
  };
    intervalId = setInterval(() => {
      randomBodyColor.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
};

function onBtnStop() {
  if (!intervalId) {
    return
  };
  clearInterval(intervalId);
  intervalId = false;
}