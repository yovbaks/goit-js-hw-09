import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button')
}


refs.form.addEventListener('input', onFormSubmit)
refs.btn.addEventListener('click', onBtnClick)

