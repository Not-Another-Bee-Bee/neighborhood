const Listing = require('../database/models')
module.exports = {

    //get data from the DB
    getFromDB: function (req, res) {
        const { id } = req.params
        Listing.getListing(id, (error, results) => {
            if (error) {
                res.status(500).end();
            } else {
                res.status(200).send(results);
            }
        })
    },


    //post data to theDB
    postToDB: function (req, res) {
        const {data} = req.body
        Listing.postListing(data, (error, results)=> {
            if(error) {
                res.status(500).end();
            } else {
                res.status(200).send(results)
            }
        })
    },

    updateDB: function (req, res) {
        //todo
    },

    deleteFromDB: function (req, res) {
        const {id} = req.params
        Listing.deleteListing(id, (error, results) => {
            if (error) {
                res.status(500).end();
            } else {
                res.status(200).send(results);
            }
        })
    },

    getNearbyHomesFromDB: function (req, res) {
        const {id} = req.params
        Listing.getNearbyListings(id, (error, result)=> {
            if (error) {
                console.log(error);
                res.staus(500).end();
            } else {
                res.status(200).send(result)
            }
        })
    }

};