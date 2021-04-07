const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



const srartBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId;
srartBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  },1000)
  srartBtn.removeAttribute('disable');
stopBtn.getAttribute('disable', true);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId)
  srartBtn.removeAttribute('disable');
  stopBtn.getAttribute('disable', true);
})







