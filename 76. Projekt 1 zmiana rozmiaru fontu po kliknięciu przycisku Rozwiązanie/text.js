//1. pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b - określamy potrzebne dane

let textSize = 20; //początkowa wielkość font-size dla p

//1c - parametry początkowe
text.style.fontSize = textSize + "px";
// text.style.backgroundColor = "gray";
// text.style.transition = '.2s';


//3. Określenie akcji - napisanie funkcji
function textIncrease() {
 textSize++;
 text.style.fontSize = textSize + "px";
}

function textDecrease() {
 textSize--;
 text.style.fontSize = textSize + "px";
}

//2. Ustawienie nasłuchiwania na przyciskach na kliknięcie.

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);