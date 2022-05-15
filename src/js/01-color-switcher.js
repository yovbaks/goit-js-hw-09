function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const btnStart = document.querySelector('[data-start]');
// const btnStop = document.querySelector('[data-stop]');
// const body = document.querySelector('body');

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
}

refs.btnStart.addEventListener('click', onStartChangeColor);
refs.btnStop.addEventListener('click', onStopChangeColor);

let changeColor = null;
refs.btnStop.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartChangeColor() {
    if (setInterval) {
        refs.btnStart.setAttribute('disabled', 'disabled');
        refs.btnStop.removeAttribute('disabled', 'disabled');
    }
    changeColor = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    },1000)
    
}

function onStopChangeColor() {
    if (setInterval) {
        clearInterval(changeColor);
        refs.btnStart.removeAttribute('disabled', 'disabled');
        refs.btnStop.setAttribute('disabled', 'disabled');
        
    }
    
}