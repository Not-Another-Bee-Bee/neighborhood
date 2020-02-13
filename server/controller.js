
const database = require('../database/index.js');

//get data from the DB
export const getFromDB = function (req, res) {
    database.fetch((err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.send(results)
        }
    });
};


//post data to theDB
export const postToDB = function (req, res) {
//todo
};



//update data in the DB

export const updateDB = function(req, res) {
//todo
};


export const deleteFromDB = function(req, res) {
//todo
};