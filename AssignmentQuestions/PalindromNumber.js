//WAP IN JS for checking number is palindrom or not

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindromeNumber(num) {
    if (num < 0) {
        return false; //Negative numbers are not palindromes

    }
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');

    return numStr === reversedStr;
}

r1.question("Enter a number: ", function (inputNumber) {
    if (isPalindromeNumber(parseInt(inputNumber))) {
        console.log('it  is a palindrom Number');
    } else {
        console.log('it is  not a palindrom Number');
    }
    r1.close();
});