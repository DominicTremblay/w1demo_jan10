// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Extract the command line arguments
// Edge Case:  We need at least 2 arguments.

const args = process.argv.slice(2);
// console.log("Args:", args);

if (args.length < 2) {
  console.log('Please enter at least 2 command line arguments');
  process.exit();
}

// add a placeholder

// function declaration
// function sum () {

// }

// ['1','2', ...]
const convertToNums = function (numbers) {
  let outputNums = [];
  for (let num of numbers) {
    // convert num to Number, Typecast
    outputNums.push(Number(num));
  }

  return outputNums;
};

const allNums = function (numbers) {
  for (let num of numbers) {
    // Edge case: If any argument is not a number, output an error message.
    if (isNaN(num)) {
      console.log('Please, enter only numbers');
      process.exit();
    }
  }
  return numbers;
};

const filterInts = function (numbers) {
  const outputNums = [];

  for (let num of numbers) {
    // Edge case: If any argument is not a whole number, skip it.
    // Number.isInteger
    // modulo operator % if num % 1 === 0
    if (Number.isInteger(num)) {
      outputNums.push(num);
    }
  }

  return outputNums;
};

// single responsibility principle
// a function should have a single goal

// function expression
const sum = function (numbers) {
  let total = 0;

  // goes through each and
  for (let num of numbers) {
    total += num;
    console.log('num:', num, 'total:', total);
  }
  return total;
};

// prints out the sum of them

const result = sum(filterInts(allNums(convertToNums(args))));

console.log('Final Total:', result);
