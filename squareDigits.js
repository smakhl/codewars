function squareDigits(num) {
    const isNumTwoOrMoreDigitsLong = (num) => num / 10 >= 1;
    const getDigits = (num) => {
        const result = [];
        while (isNumTwoOrMoreDigitsLong(num)) {
            const fract = num / 10;
            num = Math.floor(fract);
            let digit = (fract - num) * 10;
            digit = Math.round(digit);
            result.push(digit);
        }
        result.push(num);
        return result.reverse();
    }

    const digits = getDigits(num);
    const squared = digits.map(d => d*d);

    return Number( squared.join(''));
}

const test = squareDigits(9119);
console.log(test);
