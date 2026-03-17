function luckyRiver(river, hours) {
  const result = [...river];

  for (let i = 0; i < river.length; i++) {
    if (river[i] === '☘️') {
      for (let h = 1; h <= hours; h++) {
        if (i + h < river.length) {
          result[i + h] = '☘️';
        }
      }
    }
  }

  return result;
}

const W = '💧', G = '☘️';


console.log(luckyRiver(['💧', '☘️', '💧', '💧', '💧', '☘️', '💧', '💧'], 1));