function daysToInfect(city) {
  if (!city || city.length === 0 || city[0].length === 0) return 0;

  const rows = city.length;
  const cols = city[0].length;
  const queue = [];
  let healthy = 0;

  // Count healthy people and collect all starting infected positions
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (city[r][c] === '🧟') {
        queue.push([r, c, 0]); // row, col, day
      } else if (city[r][c] === '👤') {
        healthy++;
      }
    }
  }

  // No healthy people to infect
  if (healthy === 0) return 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  let maxDays = 0;
  let front = 0; // better than shift()

  while (front < queue.length) {
    const [r, c, day] = queue[front++];
    
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // Inside grid and healthy
      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        city[nr][nc] === '👤'
      ) {
        city[nr][nc] = '🧟';   // infect
        healthy--;
        queue.push([nr, nc, day + 1]);
        maxDays = day + 1;
      }
    }
  }

  return healthy === 0 ? maxDays : -1;
}