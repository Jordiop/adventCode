// Read the file

const fs = require('fs');

// Read the file into a string
const data = fs.readFileSync('../adventCode/2022/inputDay4.txt', 'utf8');

// Split the string into an array by newline character
const numbers = data.split('\n');

console.log(numbers)