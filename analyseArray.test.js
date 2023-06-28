const analyseArray = require('./analyseArray.js');

//analyse an array of numbers and return the
//average, min value, max value and length of array
  test('length, average, min and max is working 1', () => {
    expect(analyseArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
  });

  test('length, average, min and max is working 2', () => {
    expect(analyseArray([1,8,3,4,2,6,7,7,7,25])).toEqual({
        average: 7,
        min: 1,
        max: 25,
        length: 10
    });
  });


  test('works with negative AND positive values', () => {
    expect(analyseArray([1,8,3,4,2,6,7,7,7,25, -4, -2])).toEqual({
        average: 5.33,
        min: -4,
        max: 25,
        length: 12
    });
  });

  test('all positives', () => {
    expect(analyseArray([10, 20, 30])).toEqual({
      average: 20,
      min: 10,
      max: 30,
      length: 3,
    });
  });
  
  test('all negatives', () => {
    expect(analyseArray([-5, -10, -15, -20])).toEqual({
      average: -12.5,
      min: -20,
      max: -5,
      length: 4,
    });
  });
  
  test('empty array returns ERROR text', () => {
    expect(analyseArray([])).toEqual("ERROR EMPTY ARRAY");
  });
  
  test('array with one element', () => {
    expect(analyseArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });