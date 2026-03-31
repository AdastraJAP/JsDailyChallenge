function longestStreak(progress) {
  let currentStreak = 0;
  let maxStreak = 0;

  for (let day of progress) {
    if (day === '✅') {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return maxStreak;
}
console.log(longestStreak(['✅', '✅', '❌', '✅', '✅', '✅']));