const mongoose = require('mongoose');
const Room = require('../models/rooms'); //register model with mongoose
const roomModel = mongoose.model('rooms');

//GET: .accommodations - list all the accommodations
//Regardless of outcome, response must include HTML status code
//and JSON message to the requesting client
const roomsList = async(req, res) => {
    const q = await roomModel
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
    } else { //Return resulting room list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /rooms/:roomCode - lists a single room
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsFindByCode = async(req, res) => {
    const q = await roomModel
        .find({'code' : req.params.roomCode }) //Return single record
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        // console.log(q);
    
    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting room list
        return res
            .status(200)
            .json(q);
    }

};

const roomsAddRoom = async(req, res) => {
    const newRoom = new Room({
        code: req.body.code,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        rate: req.body.rate
    });

    const q = await newRoom.save();

    if(!q)
    {
        return res
                .status(400)
                .json({message: 'Failed to add new room'});
    } else {
        return res
                .status(201)
                .json({message: 'Room added successfully'});
    }
};

//PUT: /rooms/:roomCode - updates a single room
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const roomsUpdateRoom = async(req, res) => {

    //Uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    const q = await roomModel
        .findOneAndUpdate(
            { 'code' : req.params.roomCode }, //Filter
            { //Update
                code: req.body.code,
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
                rate: req.body.rate
            }
        )
        .exec();

    if(!q)
    {// Database returned no data
        return res
                .status(400)
                .json({message: 'Room not found'});
    } else {
        return res
                .status(201)
                .json({message: 'Room updated successfully'});
    }
};

module.exports = {
    roomsList,
    roomsFindByCode,
    roomsAddRoom,
    roomsUpdateRoom
};