function averageTime(total, completed) {
  const [hours, minutes, seconds] = total.split(':').map(Number);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return Math.round(totalSeconds / completed);
}