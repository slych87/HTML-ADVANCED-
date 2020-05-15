//1. We download all necessary elements
const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1a. we define variables

let textSize = 16;

//2. Defining actions
function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

//3. Setting of listening per click.
btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);