const Listing = require('../database/models');
const Pool = require('pg-pool');
var connectionString = {
    max: 50,
    user: 'postgres',
    host: '18.144.155.250',
    database: 'trillo_cole',
    password: 'admin',
    port: 5432,
};
var pool = new Pool(connectionString);

module.exports = {

    //get data from the DB
    getFromDB: function (req, res) {
        const id  = req.params.listingID
        //console.log(id);

        pool.connect()
            .then(client => {
                client.query(`SELECT * FROM listings WHERE listing_id = ${id}`)
                    .then(result => {
                        res.send(result.rows[0]);
                        client.release()
                        //console.log('client released')
                    })
                    .catch(e => {
                        client.release()
                        console.log("query error: ", e.message, e.stack)
                    })
            });
        // Listing.getListing(id, (error, results) => {
        //     if (error) {
        //         res.status(500).end();
        //     } else {
        //         res.status(200).send(results);
        //     }
        // })
    },


    //post data to theDB
    postToDB: function (req, res) {
        //postgresql query
        const id  = req.params.listingID
        const neighborhood_id = req.params.neighborhoodId
        console.log(id);

        pool.connect()
            .then(client => {
                client.query(`INSERT INTO listings() VAULES()`)
                    .then(result => {
                        res.send(result.rows[0]);
                        client.release()
                        console.log('client released')
                    })
                    .catch(e => {
                        client.release()
                        console.log("query error: ", e.message, e.stack)
                    })
            });
        },
   
   
   
   
        //     const { data } = req.body
    //     Listing.postListing(data, (error, results) => {
    //         if (error) {
    //             res.status(500).end();
    //         } else {
    //             res.status(200).send(results)
    //         }
    //     })
    // },

    updateDB: function (req, res) {
        //todo
    },

    deleteFromDB: function (req, res) {
        const { id } = req.params
        Listing.deleteListing(id, (error, results) => {
            if (error) {
                res.status(500).end();
            } else {
                res.status(200).send(results);
            }
        })
    },

    getNearbyHomesFromDB: function (req, res) {
        const { id } = req.params
        Listing.getNearbyListings(id, (error, result) => {
            if (error) {
                console.log(error);
                res.staus(500).end();
            } else {
                res.status(200).send(result)
            }
        })
    }

};