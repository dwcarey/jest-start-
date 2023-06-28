const calculator = require('./calculator');

test(' 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('divide 6/2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('multiply 2 * 2 to equal 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('function returns error when given non number', () => {
    expect(calculator.sum(6, 's')).toBe('Error: Invalid Input');
  });
  