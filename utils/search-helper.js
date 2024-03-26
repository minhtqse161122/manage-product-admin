/**
 * Hàm chuyển string thành capitalize
 * @param {string} myString
 * @returns {string}
 */
module.exports.capitalize = (myString) => {
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

/**
 * Hàm trả về Regex cho việc find text search
 * @param {string} query
 * @returns {{textSearch: string, title: RegExp}}
 */
module.exports.objectTextSearch = (query) => {
  let textSearch = "";
  let title;

  if (query.keyword) {
    textSearch = query.keyword;
    title = new RegExp(query.keyword, "i");
  }

  return {
    textSearch,
    title,
  };
};
