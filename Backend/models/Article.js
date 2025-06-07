const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },  // Example: "09"
  month: { type: String, required: true }, // Example: "JULY 2024"
  para: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true } // Store image URLs
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
