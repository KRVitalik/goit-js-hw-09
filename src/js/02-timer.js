import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

Notiflix.Notify.init({
    position: 'center-center',
    showOnlyTheLastOne: true,
})

refs = {
    input: document.querySelector('input#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    daysCounter: document.querySelector('[data-days]'),
    hoursCounter: document.querySelector('[data-hours]'),
    minutesCounter: document.querySelector('[data-minutes]'),
    secondsCounter: document.querySelector('[data-seconds]'),
    counterBox: document.querySelector('.timer'),
};

refs.counterBox.style.display = 'flex'
refs.counterBox.style.gap = '10px'

refs.btnStart.setAttribute('disabled', 'disabled');
refs.input.addEventListener('input', flatpickr)

let timer = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timer = selectedDates[0] - new Date();
        startBtn(timer)
    },
};

flatpickr("#datetime-picker", options);

function convertMs(convertedTime) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(convertedTime / day);
    const hours = Math.floor((convertedTime % day) / hour);
    const minutes = Math.floor(((convertedTime % day) % hour) / minute);
    const seconds = Math.floor((((convertedTime % day) % hour) % minute) / second);
    addLeadingZero({ days, hours, minutes, seconds })
    warningTimer({seconds})

}

function startBtn(timer) {
    if (timer < 0) {
        Notiflix.Notify.info("Please choose a date in the future");
        return
    } else {
        refs.btnStart.removeAttribute('disabled', 'disabled');
        refs.btnStart.addEventListener('click', start)
    }
}

function start() {
        refs.btnStart.setAttribute('disabled', 'disabled');
        refs.input.setAttribute('disabled', 'disabled');
        let intervalId = setInterval(() => {
            timer -= 1000;
            if (timer <= 0) {
                clearInterval(intervalId)
                return
            } else {
                convertMs(timer)
            }
        }, 1000);
    }    
    
    function warningTimer({seconds}) {
        if (seconds >= 5) {
            return;
        } else if(seconds >=1){
            Notiflix.Notify.warning(`Залишилось : ${seconds}`);
        } else {
            Notiflix.Notify.success(`ЧАС ЗАКІНЧИВСЯ`);
        }
    }
    
    function addLeadingZero({ days, hours, minutes, seconds }) {
        refs.secondsCounter.textContent = String(seconds).padStart(2, '0');
        refs.minutesCounter.textContent = String(minutes).padStart(2, '0');
        refs.hoursCounter.textContent = String(hours).padStart(2, '0');
    refs.daysCounter.textContent = String(days).padStart(2, '0');
};