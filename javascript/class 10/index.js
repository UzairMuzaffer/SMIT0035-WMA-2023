/*
  1. for loop star exercise
  1. Nested for loop
*/


//! 1. star exercise

//* forward
// var star = '';
// for (var i = 1; i <= 10; i++) {
//   star = star + '*';
//   console.log(star);
// }    

//* backward with array

// var star = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
// for (var i = 10; i >= 1; i--) {
//   console.log(star.join(''));
//   star.pop();
// }    

//* backward with string
// var star = '**********';
// for (var i = 10; i >= 1; i--) {
//   console.log(star);
//   star = star.slice(0, -1);
// }  

//* split backward
// var star = '**********';
// var space = '';
// for (var i = 10; i >= 1; i--) {
//   console.log(space + star);
//   space = space + ' ';
//   star = star.slice(1);
// }  

//* split
// var star = '*';
// var space = '         ';
// for (var i = 1; i <= 10; i++) {
//   console.log(space + star);
//   star = star + '*';
//   space = space.slice(1);
// }