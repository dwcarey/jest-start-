const reverseString = require('./reverseString');

test('take string and return reversed string, keeping case, example 1', () => {
    expect(reverseString('hElLo')).toBe('oLlEh');
});

test('take string and return reversed string, keeping case, example 2', () => {
    expect(reverseString('efgWEGR greQ13tgreGQRE rRGEgreg greGREgr')).toBe('rgERGerg gergEGRr ERQGergt31Qerg RGEWgfe');
});