function multiplyBy10(array) {
  return array.map(number => number * 10);
}

function shiftRight(array) {
  if (array.length > 2) {
    const lastArrayElement = array.pop(); 
    array.unshift(lastArrayElement); 
    return array;
  } else {
    return array;
  }
}

function onlyVowels(array) {
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
  return array.map(word =>
    word.split('').filter(char => vowels.includes(char.toLowerCase())).join('')
  );
}

function doubleMatrix(array) {
  return array.map(arrayRow => arrayRow.map(number => number * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
