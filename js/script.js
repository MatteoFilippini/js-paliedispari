/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// PRENDO LA PAROLA INSERITA
const userWord = document.getElementById('word');
const printWord = document.getElementById('printWord');;
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const userWordValue = userWord.value;
    printWord.innerText = `Corretta: ${userWordValue}`;
    console.log(userWordValue.length);
    let contrario = '';
    for (let i = userWordValue.length - 1; i >= 0; i--) {
        let temp = userWordValue.charAt(i);
        contrario += temp;

    }
    console.log(contrario)
})

// CONTROLLO SE E PALINDROMA
    // PASSO TUTTO L'ARRAY
    // SE IL VALORE DELLA PRIMA CELLA E UGUALE ALL ULTIMA ALLORA E PALINDROMA
// STAMPO

