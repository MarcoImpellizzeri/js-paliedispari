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

    /**
     * Creo una funzione che riconosce i numeri pari da quelli dispari
     * 
     * @param {number} number
     * @returns
     */
    function isEvenOrOdd(number) {
        if (number % 2 === 0) {
            return "pari";
        } else {
            return "dispari";
        }
    }

    // trovo la costante del vlaore che ha scelto nella select l'utente
    const selectElement = document.getElementById('my-select');
    const selectedValue = selectElement.value;

    // un if per verificare che sia stato selezionato uno dei due valori della select
    if (selectedValue !== 'pari' && selectedValue !== 'dispari') {
        alert('Seleziona Pari o Dispari!');
        return;
    }

    // print del numero random nello span desiderato
    const numberRandomPc = document.getElementById("number-pc");
    const numberPc = numberRandomForPc();

    numberRandomPc.innerHTML = numberPc;

    // print del numero inserito dall'utente nello span desiderato
    const numberRandomPlayer = document.getElementById("user-number");
    let numberRandomPlayerValue = numberRandomPlayer.value;

    // un if per verificare che il numero inserito sia minore di 1 o maggiore di 5
    if (numberRandomPlayerValue < 1 || numberRandomPlayerValue > 5) {
        alert('Inserisci un numero compreso tra 1 e 5!');
        return;
    }

    const numberPlayer = document.getElementById("number-player");

    numberPlayer.innerHTML = numberRandomPlayerValue;

    // somma del numero dell'utente + numero random
    const totNumbers = parseInt(numberRandomPlayerValue) + parseInt(numberPc);

    // print del risultato della somma dei due numeri dall'utente nello span desiderato
    let totNumPlayer = document.getElementById("tot-num-player");
    totNumPlayer.innerHTML = totNumbers;

    // print della function che dice se il tot dei numeri e pari o dispari
    const result = document.getElementById("result");
    result.innerHTML = isEvenOrOdd(totNumbers);

    // costante dello span con id "confirm-victory"
    const confirmElement = document.getElementById("confirm-victory");

    // condizione if tra la select e il ruslt della function "isEvenOrOdd"
    if (selectedValue === isEvenOrOdd(totNumbers)) {
        confirmElement.innerHTML = "Hai vinto!!";
    } else {
        confirmElement.innerHTML = "Hai perso!!";
    }

    console.log(totNumbers)
    console.log(isEvenOrOdd(totNumbers));
    console.log(selectedValue);
})