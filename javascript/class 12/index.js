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
