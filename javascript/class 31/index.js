
/*
  1. primitive
  2. non primitive
  3. creating object
*/


// // 1.

// let a = [2,3]
// let b = a
// a.unshift(1)
// console.log('b: ',b)
// console.log('a: ',a)

// // 2.
// function listner() {
//   console.log(1)
// }

// let b = listner
// b()
// // someElement.addEventListner('click', listner)

// // 3.
// object

// const studentInfo = {
//   name: "hamza",
//   age: 18,
//   getDOB: function(age){
//     const dob = new Date().getFullYear() - age
//     return dob  
//   }
// };

// studentInfo.getDOB(studentInfo.age)
// console.log(studentInfo.name)

// // object dynamic keys

// const str = "djewjdowejd[ewjfjwfjoiewaer223";
// const obj = {}
// for (let i = 0; i < str.length; i++) {
//    const key = str[i] 
//    if(obj[key] === undefined) obj[key] = 1
//    else obj[key] += 1
// }
// console.log(obj)
