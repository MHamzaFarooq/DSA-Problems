var majorityElement = function (nums) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
    if (hash.get(nums[i]) > nums.length / 2) {
      return nums[i];
    }
  }
};

// The map overhead makes this solution slower than the Boyer-Moore Voting Algorithm, but it is still O(n) time complexity and O(n) space complexity.
//a simpler solutions lies in simple arithmetic

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
