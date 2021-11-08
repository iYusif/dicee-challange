// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var myPic = [
//   "images/dice1.png",
//   "images/dice2.png",
//   "images/dice3.png",
//   "images/dice4.png",
//   "images/dice5.png",
//   "images/dice6.png",
// ];

// document.getElementsByClassName("img1")[0].src = myPic[randomNumber1 - 1];

// document.getElementsByClassName("img2")[0].src = myPic[randomNumber2 - 1];

// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
// } else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

// Angela`s solution

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
