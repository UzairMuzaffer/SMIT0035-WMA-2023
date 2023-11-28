
/*
   Asynchronous javascript
   request methods
  1. GET
  2. fetch
  3. fetch().then((res)=>{}) -> fulfil
  4. fetch().catch.((error)=>{}) -> fulfil
  5. json

  . Promise
  . fullfil
  . reject
*/

// const animateAll = (animate) => {
//    setTimeout(() => {
//       animate(words[0]);
//       setTimeout(() => {
//          animate(words[1]);
//          setTimeout(() => {
//             animate(words[2]);
//             setTimeout(() => {
//                animate(words[3]);
//                setTimeout(() => {
//                   animate(words[4]);
//                   setTimeout(() => {
//                      animate(words[5]);
//                   }, 1000);
//                }, 1000);
//             }, 1000);
//          }, 1000);
//       }, 1000);
//    }, 1000);
// }



const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
   log.textContent = "";

   const promiseData = fetch('https://jsonplaceholde.typicode.com/todos/1');
   console.log("promiseData:", promiseData);


   // .then((res) => {
   //    res.json().then((data) => {
   //       console.log("data:", data);
   //    });
   // }).catch((error) => {
   //    console.log("error:", error);
   // });
});

document.querySelector("#reload").addEventListener("click", () => {
   log.textContent = "";
   document.location.reload();
});

//! old way 
// const log = document.querySelector(".event-log");

// document.querySelector("#xhr").addEventListener("click", () => {
//    log.textContent = "";

//    const xhr = new XMLHttpRequest();

//    xhr.addEventListener("loadend", () => {
//       log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//    });

//    xhr.open(
//       "GET",
//       "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//    );
//    xhr.send();
//    log.textContent = `${log.textContent}Started XHR request\n`;
// });

// document.querySelector("#reload").addEventListener("click", () => {
//    log.textContent = "";
//    document.location.reload();
// });