const mongoose = require('mongoose');

// Defines Latest News Shema
const latestSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    link: { type: String }
});

const NewsLatest = mongoose.model('newsLatest', latestSchema);
module.exports = NewsLatest;