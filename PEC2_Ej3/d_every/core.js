function allEven(input) {
  return input.every(number => typeof(number) === 'number' && number % 2 === 0);
}

function allSameType(input) {
  const typeInput = typeof input[0];
  return input.every(item => typeof(item) === typeInput);
}

function positiveMatrix(input) {
  return input.every(arrayRow => arrayRow.every(number => number > 0));
}

function allSameVowels(input) {

   const inputstring = input.every(item => typeof(item) === 'string');
   if (inputstring) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstWordVowels = new Set(input[0].toLowerCase().split('').filter(char => vowels.includes(char)));
    return input.every(word => {
      const wordVowels = new Set(word.toLowerCase().split('').filter(char => vowels.includes(char)));
     return JSON.stringify(firstWordVowels) === JSON.stringify(wordVowels);
   });
  }

}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
