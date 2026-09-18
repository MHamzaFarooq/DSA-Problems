function uniqueOccurrences(arr) {
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      value = hash.get(arr[i]);
      hash.set(arr[i], value + 1);
    } else {
      hash.set(arr[i], 1);
    }
  }
  const counts = [...hash.values()];
  const uniqueCounts = new Set(counts);
  return counts.length === uniqueCounts.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
