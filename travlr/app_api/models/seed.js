// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

const Meal = require('./meals');
const Room = require('./rooms');
const Featured = require('./newsFeatured');
const Latest = require('./newsLatest');
const Tips = require('./newsTips');

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
var meals = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));
var rooms = JSON.parse(fs.readFileSync('./data/accommodations.json', 'utf8'));
var newsFeatured = JSON.parse(fs.readFileSync('./data/newsFeatured.json', 'utf8'));
var newsLatest = JSON.parse(fs.readFileSync('./data/newsLatest.json', 'utf8'));
var newsTips = JSON.parse(fs.readFileSync('./data/newsTips.json', 'utf8'));

// delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    await Meal.deleteMany({});
    await Meal.insertMany(meals);
    await Room.deleteMany({});
    await Room.insertMany(rooms);
    await Featured.deleteMany({});
    await Featured.insertMany(newsFeatured);
    await Latest.deleteMany({});
    await Latest.insertMany(newsLatest);
    await Tips.deleteMany({});
    await Tips.insertMany(newsTips);
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});