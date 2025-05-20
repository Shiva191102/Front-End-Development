const quotes = [
    "The journey of a thousand miles begins with one step.",
    "If you judge people, you have no time to love them.",
    "Nothing is impossible; the word itself says 'I'm possible'!",
    "The question isn't who's going to let me; it's who is going to stop me?",
    "Don't count the days, make the days count.",
    "Every exit is an entry somewhere else."
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("Quote");

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while(true){
    const randidx = Math.floor(Math.random()*quotes.length)

    if (usedIndexes.has(randidx)) continue

    const quote = quotes[randidx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randidx)
    break
    }
}