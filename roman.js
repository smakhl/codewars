function solution(roman) {
    const romanVals = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currNum = roman[i];
        const nextNum = roman[i + 1];

        if (nextNum && romanVals[nextNum] > romanVals[currNum]) {
            result -= romanVals[currNum];
        } else {
            result += romanVals[currNum];
        }
    }

    return result;
}

const test = solution('XXI');
console.log(test);
