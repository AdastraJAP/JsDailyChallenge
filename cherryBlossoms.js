function cherryBlossoms(temps) {
  for (let i = 4; i < temps.length; i++) {
    const avg = (temps[i] + temps[i-1] + temps[i-2] + temps[i-3] + temps[i-4]) / 5;
    if (avg > 15) return i + 1;
  }
  return -1;
}
 let temps1=[10,11,13,14,16,17,18];

 console.log(cherryBlossoms(temps1));