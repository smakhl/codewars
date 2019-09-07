const assert = require('assert');

function diamond(n) {
    if (!n || n < 1 || n % 2 === 0) return null;

    const result = [];

    result.push(makeDiamondsAndLineBreak(n));
    n = n - 2;
    let delta = 1;

    while (n > 0) {
        const row = makeSpaces(delta) + makeDiamondsAndLineBreak(n);
        result.unshift(row);
        result.push(row);
        n = n - 2;
        delta++;
    }
    return result.join('');
}

function makeDiamondsAndLineBreak(l) {
    return "*".repeat(l) + "\n";
}

function makeSpaces(l) {
    return " ".repeat(l);
}

assert.strictEqual(diamond(1), "*\n");
assert.strictEqual(diamond(3), " *\n***\n *\n");
assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
assert.strictEqual(diamond(2), null);
assert.strictEqual(diamond(-3), null);
assert.strictEqual(diamond(0), null);