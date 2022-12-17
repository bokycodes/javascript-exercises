/*  MY NOTES:
To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
  To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
  Round to one decimal place: Math.round(num * 10) / 10;*/ 


const convertToCelsius = function(num) {
    const result = (num - 32) * 5/9;
    const roundedResult = Math.round(result * 10) / 10;

    return roundedResult;
};

const convertToFahrenheit = function(num) {
  const result = num * 9/5 + 32;
  const roundedResult = Math.round(result * 10) / 10;

  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
