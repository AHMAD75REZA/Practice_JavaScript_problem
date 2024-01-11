function countWords(sentence) {
    if (sentence == null || sentence.trim() === '') {
        return 0;
    }
    const words = sentence.split(/\s+/);
    return words.length;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    const wordCount = countWords(sentence);
    console.log('Number of words in the sentence: ' + wordCount);
    rl.close();
});
