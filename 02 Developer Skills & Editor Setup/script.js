'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent
// task is this: "Given an array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes there might be a sensor
// error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//
// function calcTempAmplitude(temps) {
//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (currTemp > maxTemp) maxTemp = currTemp;
//     if (currTemp < minTemp) minTemp = currTemp;
//   }
//   return maxTemp - minTemp;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
//
// // PROBLEM 2:
// // Function should now receive 2 arrays of temperatures
//
// function calcTempAmplitudeNew(temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   let maxTemp = temps[0];
//   let minTemp = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (currTemp > maxTemp) maxTemp = currTemp;
//     if (currTemp < minTemp) minTemp = currTemp;
//   }
//   return maxTemp - minTemp;
// }

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
//
// function measureKelvin() {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius: ')),
//   };
//   console.table(measurement);
//
//   const kelvin = measurement.value + 273;
//   return kelvin;
// }
//
// console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ...
23°C in 3 days ..."

Create a function printForecast which takes in an array 'arr' and logs a string
like the above to the console.

 */

const printForecast = function (arr) {
  let forecast = '...';
  for (let i = 0; i < arr.length; i++) {
    let newForecast = ` ${arr[i]}°C in ${i + 1} days ...`;
    forecast += newForecast;
  }
  return forecast;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
