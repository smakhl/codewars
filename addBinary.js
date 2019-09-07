function addBinary(a,b) {
    const sum = a + b;

    const toBinary = (num) => {
        let r = '';

        while (num > 0) {
            r += num % 2;
            num = Math.floor(num / 2);
        }

        return r.split('').reverse().join('');
    }

    return toBinary(sum);
}

const test = addBinary(10, 3);
console.log(test);
