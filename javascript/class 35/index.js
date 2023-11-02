
/*
  1. Other Functions
*/

// 1 Function declaration
add_declaration(7,5)
function add_declaration(b) {
  return a + b
}


// 2 Function Expression
add(7,5)
const add = function(a,b) {
  return a + b
}

// 3 Arrow function
const substract = (a,b) => {
  return a - b
}
substract(10,2)

// diffrences in Arrow vs Declaratio function
/*
1 . hoisting
2 . shorter syntax
3 . arguments keyword
4 . this keyword
5 . scope of a arrow functiom is not funcion scope

*/

// const cy = 2023
// const obj = {
//     name: 'ali',
//     dob: 2000,
//     getAge: function() {
//       const calc =  () => {
//         return cy - this.dob
//       }
        
//      return calc()
//     }
// }
// obj.getAge()