
/*
  Project checking & revision
*/

const images = document.querySelectorAll("img");
const image1 = images[0];
const image2 = images[1];

function randomPic() {
  const random1 = Math.ceil(Math.random() * 6);
  const random2 = Math.ceil(Math.random() * 6);
  image1.setAttribute("src", `images/dice${random1}.png`);
  image2.setAttribute("src", `images/dice${random2}.png`);
  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}