/*
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

/**
 * Crea un numero random tra 1 e 5 
 * 
 */
function numberRandomForPc() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    return randomNumber;
}

const numberRandomPc = document.getElementById("number-pc");
const rundomNumber = numberRandomForPc();

numberRandomPc.innerHTML = rundomNumber;
