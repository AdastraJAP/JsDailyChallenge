function wordleGuess(secret, guess) {
  // Write code below 💖
  
  let count = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) count++;
  }
  return count;
}

console.log(wordleGuess("CODEX", "COINS")); 
console.log(wordleGuess("HELLO", "WORLD")); 
  
