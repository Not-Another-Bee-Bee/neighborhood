
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
import {getFromDB, postToDB, updateDB, deleteFromDB} from './controller.js';



app.use(express.json())

// Serve static files. Any requests for specific files will be served if they exist in the provided folder
app.use(express.static(path.join(__dirname, '../client/dist')));



//get request to database to grab lsiting details for current listing
app.get('api/listings/:id', getFromDB);

//get request to grab all nearby homes that are similar to the current listing id
//middleware function inside of cotroller.js file
app.get('api/listings/:id', getFromDB);

app.post()
//update request 
app.put('api/listing/:id', updateDB);


//delete listing from DB based on listing ID
app.delete('api/listing/:id', deleteFromDB);


app.listen(PORT, () => console.log('Listening on port: ' + PORT));
