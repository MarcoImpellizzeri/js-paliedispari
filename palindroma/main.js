/**
 * Creo una function che controlla se la prima meta` di una parola 
 * e uguale alla seconda meta`
 * 
 * @param {string} word 
 * @returns 
 */
function isPalindrome(word) {
    // trovo la lunghezza della parola
    const length = word.length;
    // trovo il valore della lunghezza della parola diviso due
    const middleIndex = Math.floor(length / 2);
    // un ciclo for che controlla l'uguaglianta tra i valori degli indici della parola 
    for (let i = 0; i < middleIndex; i++) {
        if (word[i].toLowerCase() !== word[length - 1 - i].toLowerCase()) {
            return false;
        }
    }

    return true;
}

const form = document.getElementById("my-form");
const inputWord = document.getElementById("input-word");
const resultSpan = document.getElementById("result");
const btnControl = document.getElementById("btn-control");

btnControl.addEventListener("click", function () {
    const wordValue = inputWord.value;

    if (isPalindrome(wordValue)) {
        resultSpan.textContent = "La parola è palindroma.";
    } else {
        resultSpan.textContent = "La parola non è palindroma.";
    }
});