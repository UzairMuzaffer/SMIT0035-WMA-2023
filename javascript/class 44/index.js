
/*
   Array ramining methods
   1. filter
   2. find
   3. findLast
   4. findIndex
   5. findLastIndex
   6. some
   7. every
   8. concat
   9. sort
   10. reverse
   11. at
   12. flat
   13. flatMap
*/


// ! filter

// const arr  = [4,2,55,8,9,45,2,2,35,5]
// arr.filter((element, index, arr) => {
//    if(element == 8) return false
//    else return true
// })

// const arr = [4, 'car', 2, 55, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35, 5]
// arr.find((element, index, arr) => {
//    if (element == 8) return true
// })


// ! find

// const arr = [4, 'car', 2, 55,false, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35,true, 5]

// arr.find((element, index, arr) => {
//    if (typeof element === 'object' && element.__proto__ === Object.prototype ) return true
// })

// const arr = [4, 'car', 2, 55,false, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35,true, 5]

// arr.find((element, index, arr) => {
//    if (typeof element === 'object' && !Array.isArray(element) ) return true
// })


// ! findIndex

// const arr  = [4,2,55,8,9,45,2,2,35,5]
// arr.findIndex((element, index, arr) => {
//     if(element > 10) return true
// })


// ! flat

// const arr  = [4,2,55,['m',[1],100],'f',7,'v','a',8,9,45,2,2,35,5]
// arr.every((element, index, arr) => {
//     if(2 > element) return true
// })

// arr.flat(2)