function narcissistic(num) {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;

    const powered = digits.map(d => d**power);

    const sumOfPoweredDigits = powered.reduce((acc, currVal) => acc + currVal);

    return sumOfPoweredDigits === num;
}


const test = narcissistic(153);
console.log(test);
