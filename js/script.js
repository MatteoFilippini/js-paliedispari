/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// PRENDO LA PAROLA INSERITA
const userWorld = document.getElementById('world');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const parola = [...userWorld.value];
    // const parola = 'ossa';
    let carattere;
    let parolaInversa = '';

    let i = parola.length - 1;

    while (i >= 0) {
        carattere = parola[i];
        parolaInversa += carattere;
        console.log(carattere);
        i--;
    }

    console.log(parolaInversa);

    if (parola == parolaInversa) {
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }


})

// CONTROLLO SE E PALINDROMA
    // PASSO TUTTO L'ARRAY
    // SE IL VALORE DELLA PRIMA CELLA E UGUALE ALL ULTIMA ALLORA E PALINDROMA
// STAMPO

