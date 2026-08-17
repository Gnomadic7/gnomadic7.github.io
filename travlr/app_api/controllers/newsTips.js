const mongoose = require('mongoose');
const Tips = require('../models/newsTips'); //register model with mongoose
const tipsModel = mongoose.model('newsTips');

//GET: .newstips - list all the news tips
//Regardless of outcome, response must inslude HTML status code
//and JSON message to the requesting client
const tipsList = async(req, res) => {
    const q = await tipsModel
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
    } else { //Return resulting tip list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /newstips/:tipCode - lists a single news tip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tipsFindByCode = async(req, res) => {
    const q = await tipsModel
        .find({'code' : req.params.newsCode }) //Return single record
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        // console.log(q);
    
    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting news tips list
        return res
            .status(200)
            .json(q);
    }

};

//POST: /newstips - adds a new news tip to the database
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tipsAddTip = async(req, res) => {
    const newTip = new Tips({
        code: req.body.code,
        title: req.body.title,
    });

    const q = await newTip.save();

    if(!q)
    {
        return res
                .status(400)
                .json({message: 'Failed to add new news tip'});
    } else {
        return res
                .status(201)
                .json({message: 'News tip added successfully'});
    }
};

//PUT: /latestNews/:newsCode - Updates existing record
// Regardless of outcomes, response must include HTML status code
// and JSON message to requesting client
const tipsUpdateTip = async(req, res) => {

    //Uncomment for debugging
    console.log(req.params)
    console.log(req.body)

    const q = await tipsModel
        .findOneAndUpdate(
            { 'code' : req.params.newsCode },
            {
                code: req.body.code,
                title: req.body.title
            }
        )
        .exec();

        if(!q)
        { //Database returns no data
            return res
                .status(400)
                .json(err);
        } else {//Return resulting updated tip
            return res
                .status(201)
                .json(q);
        }

        //Uncomment the following line to show results of operation
        //on the console
        // console.log(q);
}

module.exports = {
    tipsList,
    tipsFindByCode,
    tipsAddTip,
    tipsUpdateTip
};