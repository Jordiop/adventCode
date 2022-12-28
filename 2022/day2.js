// Read the file

const fs = require('fs');

// Read the file into a string
const data = fs.readFileSync('../Codewars/adventCode/inputDay2.txt', 'utf8');

// Split the string into an array by newline character
const trick = data.split('\n');

console.log(trick);

// A for rock
// B for paper
// C for scissors

// X for lose
// Y for draw
// Z for win

// 1 for Rock
// 2 for Paper
// 3 for Scissors

// 0 if you lose
// 3 if you draw
// 6 if you win


let points = 0;
let points2 = 0;
for (let i = 0; i <= trick.length; i++) {
    if (trick[i] == 'A X') {
        points += 4;
        // I need to lose
        points2 += 3;
    }
    if (trick[i] == 'B X') {
        points += 1;
        // I need to lose
        points2 += 1;
    }
    if (trick[i] == 'C X') {
        points += 7;
        // I need to lose
        points2 += 2;
    }
    if (trick[i] == 'A Y') {
        points += 8;
        // I need to draw
        points2 += 4;
    }
    if (trick[i] == 'B Y') {
        points += 5;
        // I need to draw
        points2 += 5;
    }
    if (trick[i] == 'C Y') {
        points += 2;
        // I need to draw
        points2 += 6;
    }
    if (trick[i] == 'A Z') {
        points += 3;
        // I need to win
        points2 += 8;
    }
    if (trick[i] == 'B Z') {
        points += 9;
        // I need to win
        points2 += 9;
    }
    if (trick[i] == 'C Z') {
        points += 6;
        // I need to win
        points2 += 7;
    }
}
console.log(points);
console.log(points2);