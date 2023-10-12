
/*
  1. Anonymous fanion
  2. change event
  3. input event
  4. focus event
  5. .style
  6. .className
  7. .classList
  8. .id
  9. .src
  10. DOM (document object modal)
*/

// if (true) {
//   const a = 21;
//   let b = 32;
//   var c = 323;
// }


const inputNumber = document.querySelector("[type='number']");
const image = document.querySelector("img");

// inputNumber.addEventListener("click", lister);
// inputNumber.addEventListener("dblclick", lister);
// inputNumber.addEventListener("change", lister);
// inputNumber.addEventListener("focus", lister);

const imagesAddressesArr = [
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  'https://images.pexels.com/photos/2377965/pexels-photo-2377965.jpeg',
  'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='
];

image.src = imagesAddressesArr[0];
// image.style.width = '200px';
// image.style.height = '200px';
// image.className = "my-image";
// image.className += " my-image";
// image.className = "";
image.classList.add("my-image");
// image.classList.contains("one");
// image.classList.remove("one");
// image.id = "three";

inputNumber.addEventListener("input", lister);



function lister() {
  let index = imagesAddressesArr.indexOf(image.src) + 1;
  if (index == 3) index = 0;
  console.log("index:", index);
  image.src = imagesAddressesArr[index];
}