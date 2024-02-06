import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElemennt = document.querySelector('form')
formElemennt.addEventListener('submit', event => {
  createPromise(event)
   .then(value =>
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${value}ms`,
        position: 'topRight',
        titleColor: 'white',
        messageColor: 'white',
        timeout: false,
        backgroundColor: '#59A10D',
      })
  )
   .catch(error =>
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${error}ms`,
        position: 'topRight',
        titleColor: 'white',
        messageColor: 'white',
        timeout: false,
        backgroundColor: '#EF4040',
      })
    );
 })
function createPromise(event) {
    event.preventDefault();
  const delay = event.currentTarget.elements.delay.value;
  const state = event.currentTarget.elements.state.value;
  return new Promise((resolve, rejest) => {
    setTimeout(() => {
      if (state === 'fulfilled') { resolve() }
      else { rejest() }
    
    },delay
    )
  })
  

}

 