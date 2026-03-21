function tweetBalance(tweet) {
  const words = tweet.split(" ");

  const used = words.reduce((total, word, i) => {
    const space = i < words.length - 1 ? 1 : 0;
    if (word.startsWith("@")) return total + 20 + space;
    if (word.startsWith("http://") || word.startsWith("https://")) return total + 23 + space;
    return total + [...word].length + space;
  }, 0);

  const emojiCount = [...tweet].filter(c => /\p{Emoji_Presentation}/u.test(c)).length;

  return 140 - used - emojiCount;
}
let input="Check out this link https://www.averylongurlthatgoesonnnnnn.com and this one https://short.co too!"
console.log(tweetBalance(input));