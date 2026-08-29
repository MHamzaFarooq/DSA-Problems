/*
Find duplicate values in an array and if the duplicates exists then return true else return false.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrWithDuplicates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

function hasDuplicates(array) {
  let uniqueValues = new Set(array);
  return uniqueValues.size !== array.length;
}

console.log(hasDuplicates(arrWithDuplicates));
