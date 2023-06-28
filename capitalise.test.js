const capitalise = require('./capitalise');

test('takes a string and returns it with the first letter ONLY capitalised', () => {
  expect(capitalise('kjweQGEQRGnrgkjergGG')).toBe('Kjweqgeqrgnrgkjerggg');
});