// https://www.codewars.com/kata/mumbling/train/javascript
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split("")
        .map((char, i) => {
            return char.toUpperCase() + char.toLowerCase().repeat(i)
        })
        .join("-");
}

const test = accum("abcd");
console.log(test);
