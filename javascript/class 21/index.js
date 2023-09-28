/*
  1.switch statement
*/

function isOddOrEven(num) {
  if (num % 2 === 0) return "Even";
  else return "Odd";
}

function isOddOrEven(num) {
  switch (num % 2) {
    case 0:
      console.log('Even');
      break;
    case 1:
      console.log('Odd');
      break;
    default:
      console.log("invalid number");
  }
}

isOddOrEven(6);


// number of occurrence give letter

// little

const word = 'little';

const lettersArr = [];
const occurrenceArr = [];

for (let i = 0; i < word.length; i++) {
  const letter = word[i];
  if (lettersArr.includes(letter) === false) {
    lettersArr.push(letter);
  }
  const index = lettersArr.indexOf(letter);
  occurrenceArr[index] ??= 0;
  occurrenceArr[index] += 1;
}

console.log(lettersArr);
console.log(occurrenceArr);