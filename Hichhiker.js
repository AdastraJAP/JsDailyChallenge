function minimumComponents(components) {
  // Write code below 💖
  const sorted = [...components].sort((a, b) => b - a);

  function backtrack(index, remaining, count) {
    if (remaining === 0) return count;
    if (index >= sorted.length || remaining < 0) return -1;

    const withCurrent = backtrack(index + 1, remaining - sorted[index], count + 1);
    const withoutCurrent = backtrack(index + 1, remaining, count);

    if (withCurrent === -1) return withoutCurrent;
    if (withoutCurrent === -1) return withCurrent;
    return Math.min(withCurrent, withoutCurrent);
  }

  return backtrack(0, 42, 0);
}

// Examples
console.log(minimumComponents([10, 20, 5, 15, 7])); 

console.log(minimumComponents([1, 2, 3, 4, 5, 6])); 
   
console.log(minimumComponents([42, 1, 1, 1]));         
