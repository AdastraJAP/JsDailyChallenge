function leakyPipe(volume, leak, hours, threshold) {
  for (let i = 0; i < hours; i++) {
    volume *= (1 - leak / 100);
    if (volume < threshold) return -1;
  }
  return Math.round(volume * 100) / 100;
}
console.log(leakyPipe(1000,5,3,100));