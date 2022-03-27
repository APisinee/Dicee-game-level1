/*Inside index.js, 
create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. 
Test it out in the console to make sure it works as expected.*/

let randomNumber1 = Math.floor(Math.random()* 6) +1 ;

// generating file name by random number 
let randomImage = "dice" + randomNumber1 + ".png";

// generating folder name by random number 
let randomSource = "images/" + randomImage;

// select the element needed to will-change
var image1 = document.querySelectorAll("img")[0];

// change inside the element 
image1.setAttribute("src",randomSource);

let randomNumber2 = Math.floor(Math.random()* 6) +1 ;
let randomSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}
