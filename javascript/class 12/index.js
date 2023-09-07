/*
  String Methods
  1. str.toLowerCase()
  2. str.toUpperCase()
  3. str.toLocaleLowerCase('language name')
  4. str.toLocaleUpperCase('language name')
  5. str.slice(0,4)
  6. str.length
  7. str.indexOf('something')
  8. str.indexOf('something') === -1
  9. str.charAt(5) // dos not support negative index
  10. str.at(5) negative index supported
  11. str.replace('some', 'to another')
  12. str.replaceAll('change all', 'to another')
  13. Number(str) // convert string to number
  14. +str // convert string to number
*/


// ! string exercise

var paragraph = `The New Yorker magazine doesn't allow the phrase "World War II. " They say it should
be "the Second World War." So let's search the following sentence for the banned characters
and replace them with the phrase that the New Yorker prefers.
It is startling to think that, even in the darkest depths of World War II, J.R.R.Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his. `;

// for (var i = 0; i < paragraph.length; i++) {
//   if (paragraph.slice(i, i + 12) === 'World War II') {
//     paragraph = paragraph.slice(0, i) + "the Second World War" + paragraph.slice(i + 12);
//   }
// }
// console.log(paragraph);


const str = "Hello, World!";
const language = "en-US";

// 1. Convert to lowercase
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // Output: "hello, world!"

// 2. Convert to uppercase
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: "HELLO, WORLD!"

// 3. Convert to locale-specific lowercase
const localeLowerCaseStr = str.toLocaleLowerCase('en-US');
console.log(localeLowerCaseStr);

// 4. Convert to locale-specific uppercase
const localeUpperCaseStr = str.toLocaleUpperCase('en-US');
console.log(localeUpperCaseStr);

// 5. Get a substring (slice)
const slicedStr = str.slice(0, 5);
console.log(slicedStr); // Output: "Hello"

// 6. Get the length of the string
const strLength = str.length;
console.log(strLength); // Output: 13

// 7. Find the index of a substring
const indexOfSomething = str.indexOf("World");
console.log(indexOfSomething); // Output: 7

// 8. Check if a substring exists in the string
const doesNotContainSomething = str.indexOf("something") === -1;
console.log(doesNotContainSomething); // Output: true

// 9. Get a character at a specific position
const charAtPos5 = str.charAt(5);
console.log(charAtPos5); // Output: ","

// 10. Get a character at a specific position using `at` (negative index supported)
const charAtPosNegative = str.at(-5);
console.log(charAtPosNegative); // Output: "o"

// 11. Replace a substring with another string
const replacedStr = str.replace("Hello", "Hi");
console.log(replacedStr); // Output: "Hi, World!"

// 12. Replace all occurrences of a substring
const replacedAllStr = str.replaceAll("o", "0");
console.log(replacedAllStr); // Output: "Hell0, W0rld!"

// 13. Convert string to a number
const strOfNumber = '1212131';
const strToNumber = Number(strOfNumber);
console.log(strToNumber); // Output: NaN (if the string is not a valid number) other than Output is: 1212131

// 14. Convert string to a number using the unary plus operator
const strToNumberPlus = +strOfNumber;
console.log(strToNumberPlus); // Output: NaN (if the string is not a valid number) other than Output is: 1212131

