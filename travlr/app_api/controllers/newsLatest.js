const mongoose = require('mongoose');
const Latest = require('../models/newsLatest'); //register model with mongoose
const latestModel = mongoose.model('newsLatest');

//GET: .newslatest - list all the latest news
//Regardless of outcome, response must inslude HTML status code
//and JSON message to the requesting client
const latestList = async(req, res) => {
    const q = await latestModel
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
    } else { //Return resulting latest news list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /news/:newsCode - lists a single news item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const latestFindByCode = async(req, res) => {
    const q = await latestModel
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
    } else { //Return resulting latest news list
        return res
            .status(200)
            .json(q);
    }

};

//POST: /newslatest - adds a new news item to the database
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const latestAddNews = async(req, res) => {
    const newNews = new Latest({
        code: req.body.code,
        title: req.body.title,
    });

    const q = await newNews.save();

    if(!q)
    {
        return res
                .status(400)
                .json({message: 'Failed to add new news item'});
    } else {
        return res
                .status(201)
                .json({message: 'News item added successfully'});
    }
};

//PUT: /newslatest/:newsCode - updates a single news item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const latestUpdateNews = async(req, res) => {

    //Uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    const q = await latestModel
        .findOneAndUpdate(
            { 'code' : req.params.newsCode },
                {
                    code: req.body.code,
                    title: req.body.title
                }
        )
        .exec();

        if(!q)
        { //Database returned no data
            return res
                .status(400)
                .json(err)
        } else {
            return res
                .status(201)
                .json(q);
        }

        //Uncomment the following line to show results of operation
        // on the console
        //console.log(q)
    }

module.exports = {
    latestList,
    latestFindByCode,
    latestAddNews,
    latestUpdateNews
};