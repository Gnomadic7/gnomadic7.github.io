const mongoose = require('mongoose');
const Featured = require('../models/newsFeatured'); //register model with mongoose
const featuredModel = mongoose.model('newsFeatured');

//GET: .newsfeatured - list all the news
//Regardless of outcome, response must inslude HTML status code
//and JSON message to the requesting client
const featuredList = async(req, res) => {
    const q = await featuredModel
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
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /news/:newsCode - lists a single news item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const featuredFindByCode = async(req, res) => {
    const q = await featuredModel
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
    } else { //Return resulting news list
        return res
            .status(200)
            .json(q);
    }

};

// PUT: /news/:newsCode - updates a single news item
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const featuredUpdateNews = async(req, res) => {

    //Uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    const q = await featuredModel
        .findOneAndUpdate(
            {'code' : req.params.newsCode }, //Filter
            {
                code: req.body.code,
                title: req.body.title,
                author: req.body.author,
                pubDate: req.body.pubDate,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json({message: "Featured news item not found"});
    } else { //Return resulting news list
        return res
            .status(201)
            .json(q);
    }

    //Uncomment the following line to show results of querey
    //on the console
    //console.log(q);

};

module.exports = {
    featuredList,
    featuredFindByCode,
    featuredUpdateNews
};