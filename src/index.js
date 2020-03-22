
module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  var array = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) {
      array = array.concat(matrix[i].reverse());
    } else {
      array = array.concat(matrix[i]);
    }
  }

  return array;
}
