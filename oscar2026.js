
function oscarPool(predictions) {
    const actual = [
        "One Battle After Another",
        "Michael B. Jordan",
        "Jessie Buckley",
        "Paul Thomas Anderson"
    ];

    const scores = {};
    for (const entry of predictions) {
        const [name, ...guesses] = entry;
        const correct = guesses.filter((g, i) => g === actual[i]).length;
        scores[name] = correct / actual.length;
    }

    const best = Math.max(...Object.values(scores));
    const winners = Object.keys(scores).filter(name => scores[name] === best);

    return winners.length > 1 ? "Tie" : winners[0];
}

console.log(oscarPool([
  ["@sonny", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Ryan Cooger"],
  ["@brit896", "Marty Supreme", "Timothée Chalamet", "Jessie Buckley", "Josh Safdie"],
  ["@tylerwhit", "Sinners", "Michael B. Jordan", "Rose Byrne", "Paul Thomas Anderson"]
])); 


console.log(oscarPool([
  ["Kalshi", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Paul Thomas Anderson"],
  ["Polymarket", "One Battle After Another", "Michael B. Jordan", "Jessie Buckley", "Paul Thomas Anderson"]
])); 


console.log(oscarPool([
  ["Rotten Tomatoes", "The Secret Agent", "Wagner Moura", "Renate Reinsve", "Kleber Mendonça Filho"],
  ["IMDb", "One Battle After Another", "Timothée Chalamet", "Jessie Buckley", "Chloé Zhao"]
])); 