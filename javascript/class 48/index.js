/*
  Promise constructor
  1. Promise.all
  2. Promise.race
*/
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('button');
buttons.forEach((btn, i) => btn.addEventListener('click', function (e) {
   e.stopImmediatePropagation();
   const count = Number(counter.innerHTML);
   if (i == 0) counter.innerHTML = count + 1;
   else counter.innerHTML = count - 1;
}));

async function main() {
   console.log("main:");
   // try {
   //    const response = await new Promise((resolve, reject) => {
   //       reject(10);
   //    });
   //    console.log("response:", response);
   // } catch (error) {
   //    console.log("error:", error);
   // }

   // const arr = [fetch(apiUrl), fetch('apiUrl'), fetch(apiUrl)];
   // const a = await Promise.allSettled(arr);
   // console.log("a:", a);

   // try {
   //    const response = await new Promise((resolve, reject) => {
   //       reject(10);
   //    });
   //    console.log("response:", response);
   // } catch (error) {
   //    console.log("error:", error);
   // }

   // arr.forEach(async (elm, i) => {
   //    const data = await (await elm).json();
   //    console.log(`data ${i}:`, data);
   // });
}

main();