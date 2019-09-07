function pascalCase(words) {
    return words
        .split(' ')
        .map(w => {
            if (!w) return;

            const withoutFirstLetter = w.slice(1);
            return w[0].toUpperCase() + withoutFirstLetter;
        })
        .join('')
}

const test = pascalCase('camel case word');
console.log(test);
