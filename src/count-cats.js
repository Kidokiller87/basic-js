//const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
 matrix=matrix.flat(1)
 let count = 0;
 for (i=0;i<matrix.length;i++) {
   if (matrix[i]==='^^') {
    count++
   }
 }
 return count
};
