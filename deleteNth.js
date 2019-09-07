function deleteNth(arr, n) {
    const occurences = {};
    const result = [];
    const isMaxOccurencesReached = (num) => {
        return occurences[num] && occurences[num] >= n;
    }
    const addOccurence = (num) => {
        if (occurences[num]) {
            occurences[num]++;
        } else {
            occurences[num] = 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if (!isMaxOccurencesReached(element)) {
            result.push(element);
        }

        addOccurence(element);
    }

    return result;
}

const test = deleteNth ([1,1,1,1],2) // return [1,1]
console.log(test);

