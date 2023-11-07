
/*
  all about constructors
*/

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

MyHuman.calcAge = function () {
  return 23 - this.dob;
};

MyHuman.prototype.number = 23832;

const obj = new MyHuman(2000, 'ali', 'male');
const obj2 = new MyHuman(2000, 'ali', 'male');
const obj3 = new MyHuman(2000, 'ali', 'male');
console.log(obj, obj2, obj3)

/*
          _  // Object
    _          _
  _ _ _ _    _ _ _ _

*/