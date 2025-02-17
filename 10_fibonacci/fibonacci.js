const fibonacci = function(number) {
    const num = Number(number)

    if(num < 0) return 'OOPS'
    if(num === 0) return 0
    if(num === 1) return 1

    let prevNumber = 0
    let currentNumber = 1
    let count

    for(i = 1; i < num; i++) {
        count = prevNumber + currentNumber
        prevNumber = currentNumber
        currentNumber = count
    }

    return count

};

console.log(fibonacci('0'))

// Do not edit below this line
module.exports = fibonacci;
