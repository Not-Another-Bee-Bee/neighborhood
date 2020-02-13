
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
import {getFromDB, postToDB, updateDB, deleteFromDB} from './controller.js';



app.use(express.json())

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));


//get request to get the data from the db
//middleware function inside of cotroller.js file
app.get('/database/listings', getFromDB);


//post request to post listing details to the db
//middlware function found inside controller.js
app.post("/database/listing", postToDB);


//update request 
app.put('/database/listing/:id', updateDB);


//delete data from the database
app.delete('/database/listing/:id', deleteFromDB);


app.listen(PORT, () => console.log('Listening on port: ' + PORT));
