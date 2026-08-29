/*

An array containing n distinct numbers in the range [0, n]. return the only number in the range that is missing from the array.

*/

let nums = [0, 1];

function missingNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let missingNum = expectedSum - sum;
  console.log(missingNum);
}

missingNumber(nums);
