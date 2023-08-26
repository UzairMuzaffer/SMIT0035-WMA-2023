/*
  1. Array
  2. Data types that support arrays (all)
  3. how to get individual indexes from array.
  4. how to mutate array.
  5. how to push multiples index in array (last) 
  6. how to unshift multiples index in array (start)
  7. how to pop(remove) index in array (end)
  8. how to shift(remove) index in array (start)
  9. how to mutate(change) index in array
  10. how to remove(change) multiple index in array
  11. how to remove and Add multiple index in array
  12. how to copy multiple index from array through slice
*/
var stringName = 'haris';
stringName = 'faris';
console.log(stringName);

var arrayName = ['h', 'a', 'r', 'i', 's'];

//! to add indexes
arrayName.push('ali'); // end
arrayName.push('a', 'l', 'i'); // end
arrayName.unshift('Mrs'); // start
arrayName.unshift('M', 'r', 's'); // start
// console.log(arrayName)

//! to remove indexes
arrayName.pop(); // end
arrayName.shift(); // start
// console.log(arrayName)

//! to change individual existing indexes
arrayName[0] = 'f';
// console.log(arrayName)

//! to remove multiple indexes
arrayName.splice(2, 2);
// console.log(arrayName)

//! to Add multiple indexes in between
arrayName.splice(2, 0, 'a');
// console.log(arrayName)

//! to remove and Add multiple indexes
arrayName.splice(2, 2, 'd', 'w', 'a');
// console.log(arrayName)

//! to copy multiple indexes from Array
var newArray = arrayName.slice(2, 5);
// console.log(newArray);

console.log(arrayName);