import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//variables
let userSelectedDate;
let intervalId = null;
const startButtonRef = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
startButtonRef.disabled = true;
let isActive = false;

const timeValueArray = document.querySelectorAll(`.value`);
startButtonRef.addEventListener('click', handleStartTimer);

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate - new Date() < 0) {
      startButtonRef.disabled = true;
      startButtonRef.classList.remove('active-btn');
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        titleColor: 'white',
        messageColor: 'white',
        timeout: false,
        backgroundColor: '#EF4040',
      });
    } else {
      startButtonRef.disabled = false;
      startButtonRef.classList.add('active-btn');
    }
  },
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function handleStartTimer() {
  if (isActive) {
    clearInterval(intervalId);
  }

  isActive = true;
  startButtonRef.disabled = true;
  startButtonRef.classList.remove('active-btn');
  inputRef.disabled = true;
  inputRef.classList.add('disable-input');
  intervalId = setInterval(() => {
    const startTime = Date.now();
    const differ = userSelectedDate - startTime;

    if (differ < 1000) {
      clearInterval(intervalId);
      inputRef.disabled = false;
      inputRef.classList.remove('disable-input');
    }
    const convertedTime = convertMs(differ);

    timeValueArray[0].textContent = addLeadingZero(convertedTime.days);
    timeValueArray[1].textContent = addLeadingZero(convertedTime.hours);
    timeValueArray[2].textContent = addLeadingZero(convertedTime.minutes);
    timeValueArray[3].textContent = addLeadingZero(convertedTime.seconds);
  }, 1000);
}