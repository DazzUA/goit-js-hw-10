import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//variables
let userSelectedDate;
const inputRef = document.querySelector(`#datetime-pocker`);
const buttonRef = document.querySelector(`button`);
const timeValueArray = document.querySelectorAll(`.value`);
buttonRef.disabled = true;
let intervalId = null;
let isActive = false;
//
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate - new Date() < 0) {
      buttonRef.disabled = true;
      buttonRef.classList.remove('active-btn');
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
      buttonRef.disabled = false;
      buttonRef.classList.add('active-btn');
    }
  },
};
const fp = flatpickr('#datetime-picker', options)

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
buttonRef.addEventListener('click', handleStartTimer);
function handleStartTimer() {
  
}