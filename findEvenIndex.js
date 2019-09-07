function findEvenIndex(arr) {
    const getSubArraySum = (start, finish, array) => {
        let sum = 0
        for (let i = start; i <= finish; i++) {
            sum += array[i]
        }
        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        const sumLeft = getSubArraySum(0, i - 1, arr);
        const sumRight = getSubArraySum(i + 1, arr.length - 1, arr);
        
        if (sumLeft === sumRight) {
            return i;
        }
    }

    return -1;
}

const test = findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
console.log(test);
