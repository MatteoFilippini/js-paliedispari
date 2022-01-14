/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// PRENDO LA PAROLA INSERITA
const userWord = document.getElementById('word');
const printWord = document.getElementById('printWord');
const invertWord = document.getElementById('invertita');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    // prendo il valore della parola
    const userWordValue = userWord.value;
    printWord.innerText = `Corretta: ${userWordValue}`;
    console.log(userWordValue);
    // evoco la funzione che inverte la parola inserita
    invert(userWordValue);
    invertWord.innerText = `Invertita: ${contrario}`;
    // evoco la funzione che confronta la parola inserita e in suo contraio
    check(userWordValue, contrario);
})

// INVERTO LA PAROLA
function invert(parola) {
    let contrario = '';
    for (let i = parola.length - 1; i >= 0; i--) {
        let temp = parola.charAt(i);
        contrario += temp;
    }
    console.log(contrario);

    return contrario;
}

// CONFTONRO LA PAROLA
function check(corretta, invertita) {
    let message = 'La parola non è palindroma';
    if (corretta === invertita) message = 'La parola è palindroma';

    console.log(message)
}

