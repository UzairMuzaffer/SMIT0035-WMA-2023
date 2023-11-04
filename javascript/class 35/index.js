
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

/*
 1. how to create cunstructor with properties & methods
 2. how to call cunstructor
 3. what new keyword does
 4. what is instanse
*/

function MyHuman(dob, name, gender) {
   this.dob = dob;
   this.name = name;
   this.gender = gender;
}

MyHuman.prototype.calcAge = function() {
  return 23 - this.dob
};

const obj = new MyHuman(2000, 'ali', 'male')
const obj2 = new MyHuman(2000, 'ali', 'male')
const obj3 = new MyHuman(2000, 'ali', 'male')
console.log(obj, obj2, obj3)

/*
          _  // Object
    _          _
  _ _ _ _    _ _ _ _

*/