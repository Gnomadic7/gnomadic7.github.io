const mongoose = require('mongoose');

//Define the meals schema
const mealSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    alt: { type: String },
    description: { type: String, required: true },
});
const Meal = mongoose.model('meals', mealSchema);
module.exports = Meal;