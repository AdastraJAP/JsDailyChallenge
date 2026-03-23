function cuddlyKittens(kittens, limit) {
  let left = 0;
  let longest = 0;
  let maxDeque = [];
  let minDeque = [];

  for (let right = 0; right < kittens.length; right++) {
    while (maxDeque.length && kittens[maxDeque.at(-1)] <= kittens[right]) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    while (minDeque.length && kittens[minDeque.at(-1)] >= kittens[right]) {
      minDeque.pop();
    }
    minDeque.push(right);

    while (kittens[maxDeque[0]] - kittens[minDeque[0]] > limit) {
      left++;
      if (maxDeque[0] < left) maxDeque.shift();
      if (minDeque[0] < left) minDeque.shift();
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(cuddlyKittens([1, 3, 6, 7, 9], 3)); 
console.log(cuddlyKittens([2, 3, 4, 5], 10));    
console.log(cuddlyKittens([1, 1, 1, 1], 0));     