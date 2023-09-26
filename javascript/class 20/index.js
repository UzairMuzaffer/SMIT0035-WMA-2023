/*
  1. global scope
  2. function scope
  3. block scope

  code run process
  1. go through 
  2. execution


  . can not redeclare
  . can be reassign


  var
  1. reassign
  2. can be access after or before initialize
  3. not a block scope
  4. it is a function scope


  let
  1. reassign
  2. TDZ (temporal dead zone)
  3. can not be access before initialize
  4. can be access after initialize
  5. it is a block scope
  6. it is a function scope
  


  const
  1. can not be reassign
  2. value must be given (not empty initialize)
  3. TDZ (temporal dead zone)
  4. can not be access before initialize
  5. can be access after initialize
  6. it is a block scope
  7. it is a function scope
  


  function
  1. not a block scope
  2. it is a function scope


*/

const apple = undefined;
// apple = null
console.log(apple);

var teacher = "a";

if (true) {
  console.log(student);
  // console.log(teacher);

  let teacher;
  var student = "ali";
  function askTeacherNAme() {
    console.log(teacher);
  }
}



function askTeacherNAme() {
  var a = '3';
  let c = '3';
  const d = '3';
  function abc() {

  }

  const arr = [];
  console.log(teacher);
}

console.log(teacher);
console.log(student);

askTeacherNAme();


function foo(value) {
  if (value) {
    var isTrueOrFalse = true;
  } else {
    var isTrueOrFalse = false;
  }

  return isTrueOrFalse;
}

console.log(foo(0));
