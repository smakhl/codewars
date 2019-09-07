const digitalRoot = (n) => {
    const isNumTwoOrMoreDigitsLong = (num) => num / 10 >= 1;
    const getDigits = (num => {
        const digits = [];
        while (isNumTwoOrMoreDigitsLong(num)) {
            const nWithLastDigitInFract = num / 10;
            num = Math.floor(nWithLastDigitInFract);
            const digit = Math.round((nWithLastDigitInFract - num) * 10);
            digits.push(digit);
        }
        digits.push(num);
        return digits;
    });
    const sumDigits = (digits) => {
        let r = 0;
        for (let i = 0; i < digits.length; i++) {
            r += digits[i];
        }
        return r;
    };

    while (isNumTwoOrMoreDigitsLong(n)) {
        const digits = getDigits(n);
        n = sumDigits(digits);
    }

    return n;

};

const r = digitalRoot(132189);
console.log(r);
