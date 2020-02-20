const faker = require('faker');
const Listing = require('./mongoSchema.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trilli_cole');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected")
  console.log("The database:")
});


require('events').EventEmitter.prototype._maxListeners = 1000;

const cityAddress = [20023, 20923, 22234, 21123, 34424, 45345, 45356, 76587, 34254, 23143, 45324, 45345, 45676, 45676, 34234, 45676, 45345, 54567, 34565, 23454, 23434, 45458, 67879, 12624, 12764, 18346, 35676, 34765, 12376, 45676, 35265, 34565, 93456, 37456, 28134, 34654, 34564];
const listingStatus = ['for sale', 'sold', 'sale pending', 'in escrow'];
const getRandomNum = (array) => Math.floor(Math.random() * array.length);

async function seedDB(outer, inner) {
  let counter = 0;
  for (let j = 0; j < outer; j++) {
    let inputArr = [];
    for (let i = 0; i < inner; i++) {
      let obj = {
        listing_id: counter,
        neighborhood_id: faker.random.number({min:1000, max:9999}),
        address: faker.lorem.paragraphs(),
        price: faker.random.number({min:100000, max:2000000}),
        images: [`${faker.image.imageUrl()}?random=${Date.now() * Math.random()}`, `${faker.image.imageUrl()}?random=${Date.now() * Math.random()}`, `${faker.image.imageUrl()}?random=${Date.now() * Math.random()}`],
        state: faker.address.state(),
        city: cityAddress[getRandomNum(cityAddress)],
        median_zestimate: faker.random.number({min:100000, max:2000000}),
        baths: faker.random.number(7),
        rooms: faker.random.number(7),
        listing_status: listingStatus[getRandomNum(listingStatus)],
        sq_ft: faker.random.number({min:1000, max:7500})

        

      };
      inputArr.push(obj);
      counter++;
    }
    console.log('done');
    await Listing.insertMany(inputArr);
  }
  
}
seedDB(1000, 10000);
