// Read the file

const fs = require('fs');

// Read the file into a string
const data = fs.readFileSync('../adventCode/2022/inputDay3.txt', 'utf8');

// Split the string into an array by newline character
const sacks = data.split('\n');

let repetidos = [];
let alphabet = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



// Searching repeated letters

for (let i = 0; i < sacks.length; i++) {
    let temp = sacks[i].slice(0, sacks[i].length / 2);
    let temp2 = sacks[i].slice(sacks[i].length / 2, sacks[i].length);
    let comprobante = [];
    for (let j = 0; j < temp.length; j++) {
        let letra = temp[j];
        if (temp2.includes(letra) && comprobante.includes(letra) == false) {
            repetidos.push(temp[j]);
            comprobante.push(letra);
        }
    }
}

repetidos.filter(letra => letra != undefined);


function contar(array) {
    let valor = 0;
    let sum = 0;
    let letraTemp;
    for (let k = 0; k < array.length; k++) {
        letraTemp = array[k];
        valor = alphabet.indexOf(letraTemp);
        sum += valor;
    }
    return sum;
}

let array2 = [];

for (let a = 0; a < sacks.length; a += 3) {
    let word1 = sacks[a];
    let word2 = sacks[a + 1];
    let word3 = sacks[a + 2];
    let comprobante1 = [];
    for (let b = 0; b < word1.length; b++) {
        let letter = word1[b];
        if (word2.includes(letter) && word3.includes(letter) && comprobante1.includes(letter) == false) {
            array2.push(letter);
            comprobante1.push(letter);
        }
    }
}

console.log(contar(repetidos));
console.log(contar(array2));