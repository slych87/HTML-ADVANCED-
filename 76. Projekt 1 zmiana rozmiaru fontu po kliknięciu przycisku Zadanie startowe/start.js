//1. pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b - określamy potrzebne dane

let textSize = 16; //początkowa wielkość font-size dla p


//3. Określenie akcji - napisanie funkcji
function textIncrease() {
 // console.log("klik!");
 textSize++;
 text.style.fontSize = textSize + "px";
}

//2. Ustawienie nasłuchiwania na przyciskach na kliknięcie.

btnIncrease.addEventListener('click', textIncrease)