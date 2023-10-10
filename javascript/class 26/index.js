
/*
  chapter 41 to -
  1. events
  2. onClick
  3. onFocus
  4. onBlur
  5. var.innerHtml
  6. var.innerText
  7. var.value
  8. var.valueAsNumber
  9. var.valueAsDate
  20. addEventListener
*/

// if (true) {
//   const a = 21;
//   let b = 32;
//   var c = 323;
// }

const inputNumber = document.querySelector("[type='number']");


function preventDecimal() {
  console.log(this);
  if (Number.isInteger(this.valueAsNumber) == false) {
    this.value = Math.round(this.valueAsNumber);
  }
  console.log(this.valueAsNumber);
}

inputNumber.addEventListener('', preventDecimal);
