const mongoose = require('mongoose');

// Define news schema
const featuredSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    author: { type: String, required: true },
    pubDate: { type: Date, required: true },
    image: { type: String, required: true },
    alt: { type: String },
    description: { type: String, required: true },
});

const NewsFeatured = mongoose.model('newsFeatured', featuredSchema);
module.exports = NewsFeatured;