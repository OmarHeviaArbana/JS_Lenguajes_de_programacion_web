function sum(array) {
  return array.reduce((totalValues, currentValue) => totalValues + currentValue, 0);
}

function productAll(array) {
  return array.reduce((accumulate, subArray) => {
    const productOfSubArray = subArray.reduce((totalSub, number) => totalSub * number, 1);
    return accumulate * productOfSubArray;
  }, 1); 
}

function objectify(array) {
  const initialObj= {}
  return array.reduce((obj, item) => { 
    obj[item[0]] = item[1];
    return obj;
  }, initialObj);
}

function luckyNumbers(array) {
  const luckyString = array.join(", ");
  const lastIndex = luckyString.lastIndexOf(",");
  const result = luckyString.substring(0, lastIndex + 1) + " and" + luckyString.substring(lastIndex + 1);
  return "Your lucky numbers are: " + result;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
