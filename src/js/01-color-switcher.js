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
  btnStop.removeAttribute('disabled', 'disabled')
  btnStart.setAttribute('disabled', 'disabled')
    intervalId = setInterval(() => {
      randomBodyColor.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
};

function onBtnStop() {
  if (!intervalId) {
    return
  };
  btnStop.setAttribute('disabled', 'disabled')
  btnStart.removeAttribute('disabled', 'disabled')
  clearInterval(intervalId);
  intervalId = false;
}