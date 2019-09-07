function comp(array1, array2) {
    if (!array1 || !array2) return false;
    if (array1.length !== array2.length) return false;

    const array2Copy = [...array2];

    for (let i = 0; i < array1.length; i++) {
        const elSquared = array1[i] ** 2;

        const index = array2Copy.indexOf(elSquared);
        if (index === -1) {
            return false;
        }

        array2Copy.splice(index, 1);
    }

    return array2Copy.length === 0;
}


const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

const test = comp(a1, a2);
console.log(test);
