const quotes = [
  {
    quotes:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quotes:
      "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quotes: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quotes:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quotes:
      "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee",
  },
  {
    quotes: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quotes:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quotes:
      "Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.",
    author: "Alexander Pope",
  },
  {
    quotes: "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
  },
  {
    quotes:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quotes:
      "Always bear in mind that your own resolution to succeed is more important than any other.",
    author: "Abraham Lincoln",
  },
  {
    quotes:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const quo = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = quo.quotes;
author.innerText = quo.author;