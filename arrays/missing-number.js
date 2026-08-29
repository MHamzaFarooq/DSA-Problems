/**
 * Problem: Missing Number
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * return the one number that is missing.
 *
 * Example:
 * Input:  [3, 0, 1]
 * Output: 2
 *
 * Approach:
 * Calculate the expected sum from 0 to n using:
 * n * (n + 1) / 2
 *
 * Then subtract the actual sum of the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function missingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2

module.exports = missingNumber;
