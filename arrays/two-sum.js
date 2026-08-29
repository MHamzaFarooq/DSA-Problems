// Find the 2 numbers in an array which add up to a target and return their indicies

let arr = [2, 11, 15, 7];
let target = 9;

function twoSum(array, target) {
  let hashMap = new Map();

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(array[i], i);
  }
}

console.log(twoSum(arr, target));
