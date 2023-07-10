/*
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

const btnPlay = document.getElementById("btn-play");

btnPlay.addEventListener("click", function () {
    /**
     * Creo un numero random tra 1 e 5 
     * 
     */
    function numberRandomForPc() {
        const randomNumber = Math.floor(Math.random() * 5) + 1;

        return randomNumber;
    }

    // print del numero random nello span desiderato
    const numberRandomPc = document.getElementById("number-pc");
    const numberPc = numberRandomForPc();

    numberRandomPc.innerHTML = numberPc;

    // print del numero inserito dall'utente nello span desiderato
    const numberRandomPlayer = document.getElementById("user-number");
    let numberRandomPlayerValue = numberRandomPlayer.value;
    const numberPlayer = document.getElementById("number-player");

    numberPlayer.innerHTML = numberRandomPlayerValue;

    // somma del numero dell'utente + numero random
    const totNumbers = parseInt(numberRandomPlayerValue) + parseInt(numberPc);

    // print del risultato della somma dei due numeri dall'utente nello span desiderato
    let totNumPlayer = document.getElementById("tot-num-player");
    totNumPlayer.innerHTML = totNumbers;

    console.log(totNumbers)
})