/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// PRENDO LE VARIABILI
const num = document.getElementById('num');
const choice = document.getElementById('choice');
const buttonElement = document.querySelector('button');
const numRandom = document.getElementById('numRandom');
const numUser = document.getElementById('numUser');

buttonElement.addEventListener('click', function () {
    const numValue = num.value;
    const choiceValue = choice.value;
    console.log("numero utente", numValue);
    console.log(choiceValue);
    random()
    numUser.innerText = `utente: ${numValue}`;
})

// GENERO UN NUMERO CASUALE
function random() {
    const numRand = Math.floor(Math.random() * 5) + 1;
    console.log("numero random", numRand);
    numRandom.innerText = `computer: ${numRand}`;
    return numRand;
}

