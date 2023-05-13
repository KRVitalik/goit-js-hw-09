import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]')
const delayStep = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const btnCreate = document.querySelector('button')

btnCreate.addEventListener('click', numberChecker)

Notiflix.Notify.init({
    position: 'center-center',
    cssAnimationStyle: 'zoom',
})

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
        resolve({ position, delay })
        } else {
        reject({ position, delay })
        }
    }, delay)
    })
};

function onBtnClick(counter, delayNumber, delay) {
  for (let i = 1; i <= counter; i += 1) {
    let position = i

    btnCreate.setAttribute('disabled', 'disabled')
    
    if (i === 1) {
    delay
    } else {
    delay += delayNumber
    }
    
    createPromise(position, delay)
        .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
        .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    .finally(() => {
            i === counter
                ? btnCreate.removeAttribute('disabled', 'disabled')
                : btnCreate.setAttribute('disabled', 'disabled')
        })
    }
}

function numberChecker(e) {
    e.preventDefault()

  let counter = Number(amount.value);
  let delayNumber =Number(delayStep.value)
  let delay = Number(firstDelay.value);

  if (counter < 0 || delayNumber < 0 || delay < 0) {
    return
  } else {
    onBtnClick(counter, delayNumber, delay)
  }
}