function streakCounter(games) {
  let currentStreak = 0;
  let maxStreak = 0;

  for (const game of games) {
    if (game === "W") {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else if (game === "L") {
      currentStreak = 0;
    }
   
  }

  return maxStreak;
}


