'use strict';
const { sanitizeEntity } = require('strapi-utils');


/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

const quotes = [
    {
        quote: "The only way to learn a new programming language is by writing programs in it.",
        author: "Dennis Ritchie",
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        quote: "Creativity is just connecting things.",
        author: "Steve Jobs",
    },
    {
        quote: "If you're afraid to change something it is clearly poorly designed.",
        author: "Martin Fowler",
    },
    {
        quote: "The human is more important than the technology. Make things more human.",
        author: "Steve Wozniak",
    },
    {
        quote: "One of my most productive days was throwing away 1,000 lines of code.",
        author: "Ken Thompson",
    }
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

module.exports = {
    async find(ctx) {
      const postCount = await strapi.services.post.count();
      const commentCount = 0; // TODO

      const quote = getRandomQuote();
  
      return JSON.stringify({
          postCount,
          commentCount,
          quote,
      });
    },
};
