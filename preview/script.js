'use strict';

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//   alert('Click');
// };

// btn.addEventListener('mouseenter', () => {
//   alert('hover');
// });

// btn.addEventListener('mouseenter', (e) => {
//   console.log(e.target);
//   e.target.remove();
//   //alert('hover');
// });

// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener('click', deleteElement);
//   }
// };

// btn.addEventListener('click', deleteElement);

let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
});


const btns = document.querySelectorAll('button');

btns.forEach( btn => {
  btn.addEventListener('click', deleteElement, {once: true});
});