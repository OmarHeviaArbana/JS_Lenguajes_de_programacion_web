function onlyEven(array) {
  return array.filter(number => number % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(word => !word.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter(arrayRow => arrayRow.every(number => number > 0));
}

function allSameVowels(array) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return array.filter(word => {
    const wordChars = word.toLowerCase().split('');
    const vowelsInWord = wordChars.filter(char => vowels.includes(char));
    const firstVowel = vowelsInWord[0]; 
    return vowelsInWord.every(vowel => vowel === firstVowel); 
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
