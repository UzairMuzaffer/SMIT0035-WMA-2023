/*
  Functions practice
  variables
  1. scop
  1. var
  2. let
*/

/* var
  1 - function scoped
  1 - not a blocked scoped
  2 - can be reassign 
*/

/* let
  1 - function scoped
  1 - also a blocked scoped
  2 - can be reassign 
*/



1.; // create a function that takes first name, last name and
// return captilize full name

function f_cap(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function capitilize(sentence) {
  var a = [];
  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    a[i] = f_cap(sentence[i]);
  }
  return a.join(" ");
}

capitilize("london. michCelmas term lately over, and the loDd chancellor sitting in lincoln's inn hall.");

2.; // create a function that takes
// a number with length and return table of that number