module.exports = function reverse(n) {
    let strNumber = n + '';
    let result = '';
    let lastNumber = '';
    let length = strNumber.length;

    if (strNumber[0] !== '-') lastNumber += strNumber[0];
    for (let i = length - 1; i > 0; i--) {
        result += strNumber[i];
    }
    return +(result + lastNumber);
}