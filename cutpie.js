function cutPie(diameter, friends) {
  // Write code below 💖
 const result = parseFloat((diameter * Math.PI / friends).toFixed(2));
  return result;
  
}
console.log(cutPie(12,5));
