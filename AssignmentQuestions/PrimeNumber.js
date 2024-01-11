// // write a program to check a number is prime or not?

// // take input from the user
// const number = parseInt(prompt("Enter a positive intehger: "));
// let isPrime = true;
// //  check if number is equal to 1

// if (number === 1) {
//     console.log("1 is neither prime nor composite number");

// }
// // / check if number is greater than 1
// else if (number > 1) {
//     // looping throgh 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log('${number} is a prime number');

//     } else {
//         console.log('${number} is a not prme nu,ber');
//     }
// }
// else {
//     console.log("the number is not  a prime number");
// }

// program to check if a number is prime or not

// take input from the user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive number: ", function(input) {
    const number = parseInt(input);
    let isPrime = true;

    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is not a prime number`);
        }
    } else {
        console.log("The number is not a prime number.");
    }

    rl.close();
});


