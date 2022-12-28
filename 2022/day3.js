// Read the file

const fs = require('fs');

// Read the file into a string
const data = fs.readFileSync('../adventCode/2022/inputDay3.txt', 'utf8');

// Split the string into an array by newline character
const sacks = data.split('\n');

let repetidos = [];
let alphabet = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];





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

let valor = 0;
let sum = 0;
let letraTemp;

for (let k = 0; k < repetidos.length; k++) {
    letraTemp = repetidos[k];
    valor = alphabet.indexOf(letraTemp);
    sum += valor;
}

console.log(sum);