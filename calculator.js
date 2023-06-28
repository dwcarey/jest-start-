function validateInputs(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return false;
    }
    return true;
  }

function sum(a, b) {
    if (validateInputs(a, b)) {
    return a + b;
    }
    return 'Error: Invalid Input';
  }

  function subtract(a, b) {
    if (validateInputs(a, b)) {
    return a - b;
  } 
  return 'Error: Invalid Input';
}

  function divide(a, b) {
    if (validateInputs(a, b)) {
    return a / b;
    }
    return 'Error: Invalid Input';
  }

  function multiply(a, b) {
    if (validateInputs(a, b)) {
    return a * b;
    }
    return 'Error: Invalid Input';
  }

  const calculator = {
    sum,
    subtract,
    divide,
    multiply,
  }

  module.exports = calculator;