// https://www.codewars.com/kata/greed-is-good/train/javascript

function score(dice) {
    const rules = [
        { diceSide: 1, count: 3, points: 1000 },
        { diceSide: 6, count: 3, points: 600 },
        { diceSide: 5, count: 3, points: 500 },
        { diceSide: 4, count: 3, points: 400 },
        { diceSide: 3, count: 3, points: 300 },
        { diceSide: 2, count: 3, points: 200 },
        { diceSide: 1, count: 1, points: 100 },
        { diceSide: 5, count: 1, points: 50 },
    ];
    const roll = {};
    let score = 0;

    for (let i = 0; i < dice.length; i++) {
        const diceSide = dice[i];
        roll[diceSide] = roll[diceSide] + 1 || 1;
    }

    rules.forEach(r => {
        if (doesRuleApply(r, roll)) {
            score += getPointsAndSubtractFromRoll(r, roll);
        }
    });

    return score;
}

function doesRuleApply(rule, roll) {
    const {diceSide, count} = rule;
    if (!roll[diceSide]) return false;
    return roll[diceSide] >= count;
}

function getPointsAndSubtractFromRoll(rule, roll) {
    const {diceSide, count, points} = rule;
    const multiplyer = Math.floor(roll[diceSide] / count);
    roll[diceSide] = roll[diceSide] - count * multiplyer;
    return multiplyer * points;
}

const test1 = score([2, 3, 4, 6, 2]) // 0,
const test2 = score([4, 4, 4, 3, 3]) // 400,
const test3 = score([2, 4, 4, 5, 4]) // 450,
console.log(test1);
console.log(test2);
console.log(test3);
