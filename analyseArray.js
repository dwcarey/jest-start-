function analyseArray(array) {

    if (array.length < 1) {
        return "ERROR EMPTY ARRAY";
    }
    const data = {
        average: null,
        min: null,
        max: null,
        length: null
    };

    let arraySum = 0;
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i += 1) {
        arraySum += array[i];

        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }

    }

    let average = (arraySum / array.length);
    average = +average.toFixed(2);

    data.average = average;
    data.min = min;
    data.max = max;
    data.length = array.length;

    return data;
};

module.exports = analyseArray;