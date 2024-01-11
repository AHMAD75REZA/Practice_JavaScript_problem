// const prompt = require('prompt');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);


//for taking input from user we use readline instead of prompt because prompt is used only for browser


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

rl.question("Enter a string: ", function(inputString) {
    if (isPalindrome(inputString)) {
        console.log(`${inputString} is a palindrome.`);
    } else {
        console.log(`${inputString} is not a palindrome.`);
    }

    rl.close();
 });
