const mainTitle = localStorage.getItem('life-counter');
let curValue = 3;

let decrease = localStorage.getItem ("test");
const reset = localStorage.getItem ("point");

test.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
});

reset.addEventListener('click', () => {
  curValue = 3;
  mainTitle.textContent = curValue;
});