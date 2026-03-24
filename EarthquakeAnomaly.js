function earthquakeAnomaly(readings) {
  const sorted = [...readings].sort((a, b) => a - b);
  const n = sorted.length;
  const median = n % 2 === 1
    ? sorted[Math.floor(n / 2)]
    : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;

  const threshold = 1.5 * median;
  return readings.reduce((acc, val, i) => {
    if (val > threshold) acc.push(i);
    return acc;
  }, []);
}