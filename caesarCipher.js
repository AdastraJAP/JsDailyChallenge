function decodeMessage(message, shift) {
  // Write code below 💖
  
    return message
        .split('')
        .map(char => {
            if (char === ' ') return ' ';
            return String.fromCharCode((char.charCodeAt(0) - 97 - shift % 26 + 26) % 26 + 97);
        })
        .join('');
}
console.log(decodeMessage("dwwdfn dw gdzq", 3));     

