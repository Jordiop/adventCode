// Read the file

const fs = require('fs');

// Read the file into a string
const data = fs.readFileSync('../Codewars/adventCode/inputDay1.txt', 'utf8');

// Split the string into an array by newline character
const elfCalories = data.split('\n');

// Find the biggest sum separated by empty string
let max = 0;
let sum = 0;
let renos = [];

// Loop through the array

for (var i = 0; i <= elfCalories.length; i++) {
    if (elfCalories[i] == "") {
        renos.push(parseInt(sum));
        if (sum > max) {
            max = sum;
        }
        sum = 0;
    } else {
        sum += parseInt(elfCalories[i]);
    }
}
renos.sort().reverse();
let sumTotal = parseInt(renos[3]) + parseInt(renos[4]) + parseInt(renos[5]);
console.log(sumTotal);
console.log(max);