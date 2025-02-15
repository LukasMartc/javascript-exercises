const sumAll = function(num1, num2) {
    let suma = 0

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    } else if(num1 < num2) {
        for(let i = num1; i <= num2; i++) {
            suma += i
        }
    } else {
        for(let i = num1; i >= num2; i--) {
            suma += i
        }
    }


    return suma
};

console.log(sumAll(2.5, 4))

// Do not edit below this line
module.exports = sumAll;
