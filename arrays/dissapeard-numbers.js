// Find all the missing numbers in an array of integers. The array contains numbers in the range [1, n] where n is the length of the array. Return an array of all the missing numbers.

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
function findDisappearedNumbers(nums) {
  let uniqueNumbers = new Set(nums);
  let missingNumbers = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (uniqueNumbers.has(i) === false) {
      missingNumbers.push(i);
    }
  }
  console.log(missingNumbers);
}

findDisappearedNumbers(nums);
