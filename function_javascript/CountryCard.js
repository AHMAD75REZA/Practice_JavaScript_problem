// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function createCountryCard(country, capital) {

//     return `Country: ${Country}, Capital: ${Capital}`;

// }
// r1.question('Enter the country: ', (inputCountry) => {
//     r1.question('Enter the capital: ', (inputCapital) => {
//         const outputCard = createCountryCard(inputCountry, inputCapital);

//         console.log(outputCard);

//         r1.close();


//     });
// });
// // const inputCountry = Prompt("Enter the country:");
// // const inputCapital = Prompt("Enter the capital:");


// // console.log(outputCard);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createCountryCard(country, capital) {
    return `Country: ${country}, Capital: ${capital}`;
}

// Taking input from the user
rl.question('Enter the country: ', (inputCountry) => {
    rl.question('Enter the capital: ', (inputCapital) => {
        // Generating the Country Card
        const outputCard = createCountryCard(inputCountry, inputCapital);

        // Displaying the Output
        console.log(outputCard);

        // Close the readline interface
        rl.close();
    });
});