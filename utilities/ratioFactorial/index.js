const ratio = require("../ratio/index");
const factorial = require("../factorial/index");

function ratioAndFactorial(num1, num2, num3) {
  const ratioOfNum = ratio(num1, num2);
  const factorialOfNum = factorial(num3);
  return {
    ratio: ratioOfNum,
    factorial: factorialOfNum,
  };
}

module.exports = ratioAndFactorial;
