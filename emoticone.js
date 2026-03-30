

function emoticonsMood(message) {
  const happy = [":)", ":p", "XD", ":3", "<3", "\\m/"];
  const sad = [":(", ":'(", "t(-.-t)"];

  let score = 0;

  for (let emo of happy) {
    score += message.split(emo).length - 1;
  }

  for (let emo of sad) {
    score -= message.split(emo).length - 1;
  }

  return score;
}
console.log(emoticonsMood("dancing with friends XD <3 <3"));
