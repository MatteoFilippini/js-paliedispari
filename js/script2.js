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
const numUser = document.getElementById('numUser');
const numRandom = document.getElementById('numRandom');
const vintoELement = document.getElementById('vinto');


buttonElement.addEventListener('click', function () {
    // prendo il numero e la scelta che inserisce l'utente
    const numValue = parseInt(num.value);
    const choiceValue = choice.value;
    // evoco la funzione che mi genera un numero casuale
    random()
    // stampo il numero dell utente e del computer
    numUser.innerText = `utente: ${numValue}`;
    numRandom.innerText = `computer: ${numRando}`;
    // evoco la funzione che somma i 2 numeri
    sum(numValue, numRando);
    // evoco la funzione che mi dice se la somma e pari o dispari
    check(sommo);
    // evoco la funzione che mi dice chi ha vinto
    vittoria(choiceValue, tipo);
    // stampo chi ha vinto
    vintoELement.innerText = `${risultato}`;
})

// GENERO UN NUMERO CASUALE
function random() {
    numRando = Math.floor(Math.random() * 5) + 1;

    return numRando;
}

// SOMMO I NUMERI
function sum(num1, num2) {
    sommo = parseInt(num1 + num2);

    return sommo;
}

// CONTROLLO SE LA SOMMA E PARI O DISPARI
function check(qualcosa) {
    tipo = "pari";
    if (qualcosa % 2 !== 0) {
        tipo = "dispari";
    }

    return tipo;
}

//CHI HA VINTO?
function vittoria(scelta, tipo) {
    risultato = "UTENTE VINCE"
    if (scelta !== tipo) {
        risultato = "COMPUTER VINCE"
    }

    return risultato;
}



