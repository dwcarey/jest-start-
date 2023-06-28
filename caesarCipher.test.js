const caesarCipher = require('./caesarCipher.js');

test('Basic test case', () => {
    expect(caesarCipher('words', 6)).toBe('cuxjy');
  });
  
  test('Test with an empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
  
  test('Test with a string containing uppercase letters', () => {
    expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
  });
  
  test('Test with a string containing both uppercase and lowercase letters and punctiation', () => {
    expect(caesarCipher('Hello, World!', 7)).toBe('Olssv, Dvysk!');
  });
  
  test('Test with a negative shift value', () => {
    expect(caesarCipher('abc', -2)).toBe('yza');
  });
  
  test('Test with a large positive shift value', () => {
    expect(caesarCipher('xyz', 30)).toBe('bcd');
  });
  
  test('Test with a shift value greater than 26', () => {
    expect(caesarCipher('def', 29)).toBe('ghi');
  });
  
  test('Test with a shift value less than -26', () => {
    expect(caesarCipher('abc', -302)).toBe('klm');
  });
  