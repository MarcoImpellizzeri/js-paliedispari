/**
 * Creo una function per scomporre la parola e scriverla al contrario
 * 
 * @param {string} word 
 * @returns 
 */
function isPalindrome(word) {
    // Inverti la parola
    const reversedWord = word.split('').reverse().join('');

    // Confronta la parola originale con la sua inversione, senza considerare le differenze tra lettere maiuscole e minuscole
    return word.toLowerCase() === reversedWord.toLowerCase();
}

let newWord = document.getElementById("casual-word");

console.log(isPalindrome(newWord));