/*
 logical operators (>, < , ===, !==, &&)
 1. Falsy values (false, 0, "", null)
 2. Truthy values
 3. Logical && Operator
 4. if statements nested
*/

//! 2 Falsy values
// false
// 0
// ""
// null
// undefined


//! 3 Truthy values
// true
// any number greater the 0
// any string that is not empty

var jug = "water";
var juicePowder = "Milk powder";

//! chapter 13
if (jug === "water" && juicePowder === "Tang") {
    console.log(jug + juicePowder);
}

if (jug === "water") {
    console.log("ok");
} else if (juicePowder === "Tang") {
    console.log("ok");
}

if (jug === "water" || juicePowder === "Tang") {
    console.log("ok");
}

//! chapter 14
if (jug === "water") {

    if (juicePowder === "Tang") {
        console.log(jug + juicePowder);
    } else {
        console.log('Tang id not available in juicePowder');
    }

} else {
    console.log('water is not available in jug');
}