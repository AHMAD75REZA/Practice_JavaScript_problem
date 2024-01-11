// for(var i=0; i<10; i++)
// { console.log("Hello world"); }

// let i = 10;
// while (i >= 0) {
//     console.log("Hello world");
//     i--
// }

// let j=0;
// do{
//    console.log("Hello world")
//    j++ 
// }
// while(j<10)

//For ..in
//objects
let animal = {
    name: "ZEBRA",
    leg: 4,
    Eyes: 2

};
for (let key in animal) {
    console.log(key, animal[key]);
}

//Array
let names = ["Ghulam", "Ahmad", "Jakir", "Asif"];
for(let index in names){
    console.log(index, names[index]);
}

// For....of
for(let name of names){
    console.log(name)
}
