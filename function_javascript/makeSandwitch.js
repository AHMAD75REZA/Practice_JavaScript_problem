let bread1 = prompt("which bread would u like to have :-");
let veggies1 = prompt("what are ur favorite veggies");
let sauce1 = prompt("which sauce would u like to have :-");

function makeSandwitch(bread, veggies, sauce) {
    let Sandwitch = bread + "bread " + veggies + " " + sauce + " sandwitch is ready"
    return Sandwitch;
}
let vegSandwich = makeSandwitch(bread1, veggies1, sauce1);
console.log(vegSandwich);
