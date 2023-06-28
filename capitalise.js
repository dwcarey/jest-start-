function capitalise(string) {
    const stringArray = string.split('');
    const lowerCaseArray = stringArray.map(item => item.toLowerCase());
    const firstLetter = lowerCaseArray.shift().toUpperCase();
    lowerCaseArray.unshift(firstLetter);
    return lowerCaseArray.join('');
  }
  module.exports = capitalise;

  //convert word to array
  //set all to lower case
  //set first letter to upper case
  //return array.join