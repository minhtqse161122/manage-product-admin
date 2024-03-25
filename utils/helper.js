const capitalize = (myString) => {
  const strArr = myString.split("");

  const newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      newArr.push(strArr[i].toUpperCase());
    } else {
      if (strArr[i - 1] == " ") {
        newArr.push(strArr[i].toUpperCase());
      } else {
        newArr.push(strArr[i]);
      }
    }
  }
  return newArr.join("");
};

module.exports = {
  capitalize,
};
