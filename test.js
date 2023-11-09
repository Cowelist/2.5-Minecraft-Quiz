const mainTitle = document.querySelector('#life-counter');
let curValue = 3;

const decrease = document.getElementsByClassName ("textAnswer");
const reset = document.getElementsByClassName ("reset");

decrease.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
});

reset.addEventListener('click', () => {
  curValue = 3;
  mainTitle.textContent = curValue;
});