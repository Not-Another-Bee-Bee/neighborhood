const Listing = require('../database/mongoSchema.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trilli_cole');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("connected")
    console.log("The database:")
});

module.exports = {

    getListing: (id, callback) => {
        Listing.find({ listing_id: Number(id) })
            .then((results) => {
                callback(null, results);
            })
            .catch((error) => {
                console.log(error)
                callback(error);
            })
    },


    getNearbyListings: (neighboorhood_id, callback) => {
        Listing.find({ neighboorhood_id: Number(neighboorhood_id) })

            .then((results) => {
                callback(null, results);

            })
            .catch((error) => {
                console.log(error)
                callback(error)
            })
    },


    postListing: (data, callback) => {
        const NewListing = new Listing(data);
        NewListing.save()
            .then((results) => {
                callback(null, results);
            })
            .catch((error) => {
                console.log(error)
                callback(error);
            })
    },


    deleteListing: (id, callback)=> {
        Listing.deleteOne({listing_id: Number(id)})
        .then((results)=> {
            callback(null, results);
        })
        .catch((errror)=> {
            console.log(error);
            callback(error);
        })
    },


    updateListing: (id, data, callback)=> {
        Listing.updateOne({listing_id: Number(id)}, data)
        .then((results)=> {
            callback(null, results);
        })
        .catch((error)=> {
            callback(error);
        })
    }
};