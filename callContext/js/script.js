'use strict';

// 1) this = window (if 'use strict' is enabled this = undefined) //

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4, 5);

//---------------------------------------------------//

// 2) context of methods of an object is object itself //

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   }
// };

// obj.sum();


// this = undefined //
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     };
//     shout();
//   }
// };

// 3) this in constructors and classes is new instance of object //

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}!`);
//   };
// }

// let ivan = new User('Ivan', 28);


// 4) hand tied: call, apply & bind  //

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + " " + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  // console.log(this);
  this.style.backgroundColor = 'red';
});

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this);
    };
    say();
  }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));