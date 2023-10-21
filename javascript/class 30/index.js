
/*
  revision
*/

//! Q: write a function that tell in boolean if value of v after sum of a & b exist or not
// let a = [-3, 1, -6, 4]
// let b = [2, 3, -9, -6]
// let v = -9

// // ans 1
// let a = [-3, 1, -6, 4];
// let b = [2, 3, -9, -6];
// let v = -99;

// function findAns(a, b, v) {
//   for (const elm of b) {
//     if (a.includes(v - elm)) return true;
//   }
//   return false;
// }

// findAns(a, b, v);

// // ans 2
// let a = [-3, 1, -6, 4];
// let b = [2, 3, -9, -6];
// let v = -9;

// function findAns(a, b, v) {
//   for (const aElm of a) {
//     for (const bElm of b) {
//       const sum = aElm + bElm;
//       if (sum === v) return true;
//     }
//   }
//   return false;
// }

// findAns(a, b, v);


//! Q: convert below array to 90 degree angle.

const arrOfArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// ans1
// const newArr = [
//   [],
//   [],
//   [],
// ]

// for (let i = 0; i < arrOfArr.length; i++) {
//   const arr1Index = arrOfArr[i][2]
//   const arr2Index = arrOfArr[i][1]
//   const arr3Index = arrOfArr[i][0]
//   newArr[0].push(arr1Index)
//   newArr[1].push(arr2Index)
//   newArr[2].push(arr3Index)
// }

//ans 2
// let newArr = [];

// // 90 deg right
// for (let i = 0; i < arrOfArr.length; i++) {
//   newArr.unshift([arrOfArr[0][i], arrOfArr[1][i], arrOfArr[2][i]]);
// }
// console.log(newArr);


//! Q: body mass calculation

// // body mass formula weight / height ** 2
// const weightMark = 78;
// const heightMark = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = (weightMark / heightMark ** 2).toFixed(2);
// const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

// if (markBMI > johnBMI) console.log(`Mark's BMI ${markBMI} is higher than john's ${johnBMI}`);
// else if (johnBMI > markBMI) console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
// else console.log(`John's BMI ${johnBMI} and Mark's BMI ${markBMI} is equal`);

//! Q: Average score function challenge

// function calcAverage(a, b, c) {
//   return (a + b + c) / 3;
// }

// function checkWinner(scoreTeam1, scoreTeam2) {
//   if (scoreTeam1 > scoreTeam2) console.log(`team1 wins 🏆 (${scoreTeam1} vs. ${scoreTeam2})`);
//   else if (scoreTeam2 > scoreTeam1) console.log(`team2 wins 🏆 (${scoreTeam2} vs. ${scoreTeam1})`);
//   else console.log(`no team wins....`);
// }

// let scoreTeam1 = calcAverage(44, 23, 71);
// let scoreTeam2 = calcAverage(65, 54, 49);
// checkWinner(scoreTeam1, scoreTeam2);

// //! tip calculator Array
// // bill <= 300 ? 0.15 :  0.2
// const bills = [125, 555, 54];
// const tips = [];
// for (let bill of bills) {
//   let tipPercent;
//   if (bill <= 300) tipPercent = 0.15
//   else tipPercent = 0.2;
    
//   tips.push(bill * tipPercent)  
// }
// console.log(tips)