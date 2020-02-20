
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const {getFromDB,getNearbyHomesFromDB, postToDB, updateDB, deleteFromDB} = require('./controller.js');





app.use(express.json())

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));



//get request to database to grab listing details for current listing
app.get('/listings/:listingID', getFromDB);



//get request to grab all nearby homes that are similar to the current listing id
//middleware function inside of cotroller.js file
app.get('/listings/:listingID', getNearbyHomesFromDB);


//post a listing by a specific agent
app.post('/listings/25/agents/2/listing', postToDB);


//update a listing by a specific agent
app.put('/listing/:listingID', updateDB);


//delete listing from DB based on listing ID
app.delete('/listing/:listingID', deleteFromDB);


app.listen(PORT, () => console.log('Listening on port: ' + PORT));
