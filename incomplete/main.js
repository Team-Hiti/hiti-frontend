let cnt = 0;
const test = document.querySelector('#test');
document.querySelector('button').addEventListener(
  'click',
  event => {
    test.classList.remove(`n-${cnt}`);
    cnt = (cnt < 5) ? cnt+1 : 0;
    test.classList.add(`n-${cnt}`);
  }
);