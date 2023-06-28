const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesarCipher(string, key) {
    while (key > 25) {
        key = (key - 26)
    };
    while (key < 0) {
        key = (key + 26)
    };

    const result = string
    .split('')
    .map((character) => {
      if (alphabetArray.includes(character.toLowerCase())) {
        const index = alphabetArray.indexOf(character.toLowerCase());
        const shiftedIndex = (index + key) % 26;
        const shiftedCharacter = alphabetArray[shiftedIndex];
        return character === character.toLowerCase() ? shiftedCharacter : shiftedCharacter.toUpperCase();
      }
      return character;
    })
    .join('');

  return result;
};

module.exports = caesarCipher;