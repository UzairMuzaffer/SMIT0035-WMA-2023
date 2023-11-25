
/*
   Array ramining methods
   1. Expression Bodies
   2. Spread Operator
   3. shallow vs deep copy
   4. rest opeartor
   5. destructuring
*/


//! Expression Bodies
// const pairs = [1,2,3,4,5,6].map(v => ({ even: v, odd: v + 1 }))

//! Spread Operator
// var params = [ "hello", true, 7, {a: 10} ]
// var other = [ 1, 2, ...params ]

// const obj1 = {a: 1, c: 4}
// const obj2 = {b: 4, c: 9}
// const obj3 = {...obj1, ...obj2}

//! shallow vs deep copy
// const arr = [1,2,[100],3,4]
// const arr2 = [...arr]
// arr[2].push(200)

//! rest opeartor & destructuring
// const arr = [10, 20, 30, 50]
// const [a, b, ...c] = arr
// console.log({a,b,c})

// const obj = {n: 10, v: 20}
// const {b , ...k} = obj
// const {n , v: h = 80 , z = 22} = obj
// console.log(n, h, z) 