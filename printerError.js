// https://www.codewars.com/kata/printer-errors/train/javascript

function printerError(s) {
    const isCorrect = (char) => /[a-m]/i.test(char);
    let errors = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isCorrect(char)) {
            errors++;
        }
    }

    return `${errors}/${s.length}`;
}

const test = printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");
console.log(test); // "3/56"
