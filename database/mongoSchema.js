const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
  listing_id: {type: Number, required:true},
  address: {type: String, required: true},
  price:{type: Number, required: true},
  images: {type: [String], required: true},
  state: {type: String, required: true},
  city: {type: String, required: true},
  median_zestimate: {type: Number, required: true},
  baths:{type: Number, required: true}, 
  rooms:{type: Number, requiredPaths: true},
  listing_status: {type: String, required: true},
  sq_ft: {type: Number, required: true}
});



const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;