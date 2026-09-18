var firstUniqChar = function (s) {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (hash.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
console.log("index of first unique character: " + firstUniqChar("shashank"));
