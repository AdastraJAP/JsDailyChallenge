function upsetProbability(matchups) {
  return matchups.map(([, seedA, , seedB]) => 
    parseFloat((seedA / (seedA + seedB)).toFixed(2))
  );
}

let matchups = [
  ["Duke", 1, "Siena", 16],
  ["Ohio State", 8, "TCU", 9]
]
console.log(upsetProbability(matchups));