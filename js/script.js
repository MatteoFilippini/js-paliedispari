/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// PRENDO LA PAROLA INSERITA
const userWorld = document.getElementById('word');
const printWorld = document.getElementById('printWord');;
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const userWordValue = userWord.value;
    printWord.innerText = userWordValue;

})

// CONTROLLO SE E PALINDROMA
    // PASSO TUTTO L'ARRAY
    // SE IL VALORE DELLA PRIMA CELLA E UGUALE ALL ULTIMA ALLORA E PALINDROMA
// STAMPO

