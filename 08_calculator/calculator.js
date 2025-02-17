const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
  let suma = 0
  numbers.forEach(e => suma += e)
  return suma
};

const multiply = function(numbers) {
  let multiplication = 1
  numbers.forEach(e => multiplication = multiplication * e)
  return multiplication
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(number) {
  let result = 1

  if(number === 0) return result

	for(let i = 1; i <= number; i++) {
    result = result * i
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
