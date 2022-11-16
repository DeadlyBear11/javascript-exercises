const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  const nums = [...arr];
  const sumUp = nums.reduce((total, num) => {
    return +total + +num;
  }, 0);
  return sumUp;
};

const multiply = function (arr) {
  const nums = [...arr];
  const mult = nums.reduce((total, num) => {
    return +total * +num;
  }, 1);
  return mult;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  };

  const mult = arr.reduce((total, num) => {
    return +total * +num;
  }, 1);
  return mult;
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
