function checkPalindrome(s) {
  const cleaned = s.replace(/ /g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("Was it a car or a cat I saw"));
console.log(checkPalindrome("11 11"));
console.log(checkPalindrome("12345"));