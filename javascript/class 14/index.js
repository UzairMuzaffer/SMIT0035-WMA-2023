/*
  Math methods
  1. Math.random()
  2. Math.round()
  3. Math.ceil()

  number methods
  1. parseInt("822.9093209230923")
  2. parseFloat("822.9093209230923")
  3. num.toString()
  3. num.toFixed(2)
*/

// /*
// guess number game

var userGuess = +prompt('What is your guess between 1 to 10');
console.log("userGuess:", userGuess);

// var computerMindNumber = String(Math.random() * 10);
// computerMindNumber = Number(computerMindNumber[0]) + 1;

var computerMindNumber = Math.ceil(Math.random() * 10);

console.log("computerMindNumber:", computerMindNumber);

if (userGuess === computerMindNumber) {
  alert(`your guess is right. correct Number is ${computerMindNumber}`);
} else {
  alert(`your guess is Wrong. correct Number is ${computerMindNumber}`);
}

// */
