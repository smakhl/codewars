function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < alphabet.length; i++) {
        const symbol = alphabet[i];
        
        if (string.toLowerCase().indexOf(symbol) === -1) {
            return false;
        }
    }

    return true;
}

const test = isPangram('The quick brown fox jumps over the lazy dog.');
const test2 = isPangram('haha no its not')

console.log(test);
console.log(test2);
