// Length of the string syntax
const str = 'Life, the universe and everything.'
console.log(str.length);
// output =34

// Different scanerio

var favShow = "Game of thrones";
console.log(favShow.length);// o/p 15

console.log(favShow[0]);// G

console.log(favShow[favShow.length-1]); // o/p: s

console.log(favShow.indexOf("of")); // o/p: 5
 
console.log(favShow.slice(5,7)); // o/p: of

var srk = "My NamE Is Ahmad";
console.log(srk.toUpperCase()); // o/p: MY NAME IS AHMAD

console.log(srk.toLowerCase()); // o/p: my name is ahmad



// 2 concatenation of String
const str1 = 'hello';
const str2 = 'world';

console.log(str1.concat(' ',str2));
// output: hello world


// 3 Spliting a String
const str3 = 'The quick brown fox.';
 const words = str3.split(' ');
 console.log(words[3]);
// output: fox


// character at String
const sentence = 'The quick brown fox';
const index =4;
console.log(sentence.charAt(index));
// output: q

