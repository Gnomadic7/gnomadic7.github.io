const mongoose = require('mongoose');

// Define News Tips Schema
const tipsSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    title: { type: String, required: true, index: true },
    link: { type: String }
});

const NewsTips = mongoose.model('newsTips', tipsSchema);
module.exports = NewsTips;