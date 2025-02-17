const convertToCelsius = function(temperatureInFahrenheit) {
  const temperatureInCelsius = (temperatureInFahrenheit - 32) * (5/9)
  return Number.isInteger(temperatureInCelsius) ? temperatureInCelsius : Number(temperatureInCelsius.toFixed(1))
};

const convertToFahrenheit = function(temperatureInCelsius) {
  const temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32
  return Number.isInteger(temperatureInFahrenheit) ? temperatureInFahrenheit : Number(temperatureInFahrenheit.toFixed(1))
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
