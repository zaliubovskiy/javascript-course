'use strict';

// Coding Challenge #2

// function calcTip(bill) {
//   if (50 <= bill && bill <= 300) {
//     return (bill / 100) * 15;
//   } else {
//     return (bill / 100) * 20;
//   }
// }
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips);
// console.log(total);
//
// console.log('test');
// console.log(calcTip(125));
// console.log(calcTip(555));
// console.log(calcTip(44));
//
// const maxim = {
//   firstName: 'Max',
//   lastName: 'Zaliubovskiy',
//   birthYear: 1996,
//   job: 'developer',
//   hasDriversLicense: false,
//   friends: ['Artem', 'Paul', 'Bodya'],
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };
//
// console.log(
//   `${maxim.firstName} has ${maxim.friends.length} friends and his best friend is ${maxim.friends[0]}`
// );
// console.log(maxim.getSummary());

// Coding Challenge #3

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
//
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(1)}) is ${john.bmi > mark.calcBMI() ? "higher" : "lower"} than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`)

// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
//
// function calcTip(bill) {
//   if (50 <= bill && bill <= 300) {
//     return (bill / 100) * 15;
//   } else {
//     return (bill / 100) * 20;
//   }
// }
//
// for (let i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);
//
// // BONUS TIP
// function calcAverage(array) {
//   let totalSum = 0;
//   for (let j = 0; j < array.length; j++) {
//     totalSum += array[j];
//   }
//   return totalSum / array.length;
// }
//
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));
