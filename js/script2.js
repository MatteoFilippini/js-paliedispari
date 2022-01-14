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


buttonElement.addEventListener('click', function () {
    const numValue = num.value;
    const choiceValue = choice.value;
    console.log(numValue);
    console.log(choiceValue);
})