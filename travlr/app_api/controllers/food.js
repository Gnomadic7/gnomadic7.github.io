const mongoose = require('mongoose');
const Meal = require('../models/meals'); //register model with mongoose
const mealModel = mongoose.model('meals');

//GET: .food - list all the meals
//Regardless of outcome, response must inslude HTML status code
//and JSON message to the requesting client
const mealsList = async(req, res) => {
    const q = await mealModel
        .find({}) //No Filter, return all records
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        //console.log(q);

    if(!q)
    { //Database return no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting meal list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /meals/:mealCode - lists a single meal
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsFindByCode = async(req, res) => {
    const q = await mealModel
        .find({'code' : req.params.mealCode }) //Return single record
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        // console.log(q);
    
    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting meal list
        return res
            .status(200)
            .json(q);
    }

};

//POST: /food - adds a new meal to the database
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsAddMeal = async(req, res) => {
    const newMeal = new Meal({
        code: req.body.code,
        name: req.body.name,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    }); //Get the new meal from the request body

    const q = await newMeal.save(); //Save the new meal to the database

    if(!q)
    {
        return res
                .status(400)
                .json({message: 'Failed to add new meal'});
    } else {
        return res
                .status(201)
                .json({message: 'Meal added successfully'});
    }
};

//PUT: /meals/:mealCode - updates an existing meal in the database
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const mealsUpdateMeal = async(req, res) => {
    //Uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    const q = await mealModel
        .findOneAndUpdate(
            { 'code' : req.params.mealCode }, //Filter
            { //Update
                code: req.body.code,
                name: req.body.name,
                title: req.body.title,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if(!q)
    {// Database returned no data
        return res
                .status(400)
                .json({message: 'Meal not found'});
    } else {
        return res
                .status(201)
                .json({message: 'Meal updated successfully'});
    }
};

module.exports = {
    mealsList,
    mealsFindByCode,
    mealsAddMeal,
    mealsUpdateMeal
};