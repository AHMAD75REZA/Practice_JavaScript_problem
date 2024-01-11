// Write a program to count the number of occurance of given character in a string
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function countOccurances(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}
// Take input from the user
// let inputString = prompt("Enter a string ");
// let charToCount = prompt("Enter a character to count: ");

r1.question('Enter a string: ', (inputString) => {
    r1.question('Enter a character to count: ',(charToCount) => {
        
    let result = countOccurances(inputString, charToCount);
    console.log(`Number of occurrences of '${ charToCount }' in the string: ${result}` );
    });
});
