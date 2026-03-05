const quotes = [
"Believe in yourself.",
"Success is not final, failure is not fatal.",
"Dream big and dare to fail.",
"Stay positive, work hard, make it happen.",
"Your only limit is your mind.",
"Push yourself because no one else will.",
"Great things never come from comfort zones.",
"Do something today that your future self will thank you for."
];

function generateQuote(){
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
