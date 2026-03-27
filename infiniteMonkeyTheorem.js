function infiniteMonkey(target, attempt) {
  const len = target.length;
  let bestIndex = 0;
  let bestMatches = -1;


  for (let i = 0; i <= attempt.length - len; i++) {
    let matches = 0;

    for (let j = 0; j < len; j++) {
      if (attempt[i + j] === target[j]) {
        matches++;
      }
    }


    if (matches > bestMatches) {
      bestMatches = matches;
      bestIndex = i;
    }
  }

  const rawSimilarity = (bestMatches / len) * 100;
  const similarity = Math.round(rawSimilarity * 100) / 100;

  let attempts = null;
  if (rawSimilarity > 0) {
    attempts = Math.round(Math.pow(100 / rawSimilarity, len));
  }

  return {
    best_index: bestIndex,
    similarity: similarity,
    attempts: attempts
  };
}

console.log(infiniteMonkey("hamlet", "xxhamxetxxxx"));

console.log(infiniteMonkey("To be, or not to be.", "7q$To be, or not to bug?9x"));

