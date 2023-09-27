const convertToCelsius = function(temperature) {
  let celsius = 5 / 9 * (temperature-32);
  let decimals = celsius.toFixed(1);
  let answer = Number(decimals);
  return answer;
};



//Need to use the toFixed method (returns a string)
//Need to use the Number() method to convert string to number.

const convertToFahrenheit = function(temp) {
  let faren = (temp * 9 / 5) + 32;
  let decimals = faren.toFixed(1);
  let answer = Number(decimals);
  return answer;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
