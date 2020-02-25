const fs = require('fs');
const faker = require('faker');


const listingStatus = ['for sale', 'sold', 'sale pending', 'in escrow'];
const images =  'https://yelpimagesmodal.s3-us-west-1.amazonaws.com/yelp-images/New+Folder+With+Items+2+copy/yelp-images';
const cityAddress = [20023, 20923, 22234, 21123, 34424, 45345, 45356, 76587, 34254, 23143, 45324, 45345, 45676, 45676, 34234, 45676, 45345, 54567, 34565, 23454, 23434, 45458, 67879, 12624, 12764, 18346, 35676, 34765, 12376, 45676, 35265, 34565, 93456, 37456, 28134, 34654, 34564];
const getRandomNum = (array) => Math.floor(Math.random() * array.length);



const writeUsers = fs.createWriteStream('listings.csv');
writeUsers.write('neighborhood_id, address, price, images, state, city, median_zestimate, baths, rooms, listing_status, sq_ft\n');


function writeTenMillionUsers(writer, callback) {
    let i = 10000000;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1001;
         const neighborHoodZip =faker.random.number({min:1000, max:10000});
        let address = faker.address.streetAddress();
        address = address.replace(/,/g, ''); 
        const price = faker.random.number({min:100000, max:2000000});
        const images = [faker.image.abstract()];
        const state = faker.address.state();
        const city = faker.address.city();
        const median_zestimate = faker.random.number({min:100000, max:2000000});
        const baths = faker.random.number(7);
        const rooms = faker.random.number(7);
        const listing_status = listingStatus[getRandomNum(listingStatus)];
        const sq_ft = faker.random.number({min:1000, max:7500});
        let data = '';
          data += `${neighborHoodZip}, ${address}, ${price},  ${images}, ${state}, ${city}, ${median_zestimate}, ${baths}, ${rooms}, ${listing_status}, ${sq_ft}\n`;
       
        if (i === 0) {
            writer.write(data, callback);
          } else {
            // see if we should continue, or wait
            // don't pass the callback, because we're not done yet.
            ok = writer.write(data);
          }
        } while (i > 0 && ok);
        if (i > 0) {
          
          // had to stop early!
          // write some more once it drains 
          writer.once('drain', write);
        }
      }
    write();
    };


    writeTenMillionUsers(writeUsers, () => {
      writeUsers.end();node
    });













// const writeNeighborhoods = fs.createWriteStream('neighborhoods.csv');
// writeNeighborhoods.write('neighborhood_id, transitscore, walkingscore, neighborhood_home_value, one_year_prediction\n', 'utf8');


// function writeTenMillionUsers(writer, encoding, callback) {
//     let i = 10000;
//     let id = 500;
//     function write() {
//       let ok = true;
//       do {
//         i -= 1;
//         id +=1;
//         const neighborhoods_id = id;
//         const transitscore = faker.finance.amount(0,5,2);
//         const walkingscore = faker.finance.amount(0,5,2);
//         const neighborhood_home_value = faker.finance.amount(0,5,2);
//         const one_year_prediction = faker.finance.amount(0,5,2);

//         const data = `${neighborhoods_id}, ${transitscore}, ${walkingscore}, ${neighborhood_home_value}, ${one_year_prediction}\n`;
       
//         if (i === 0) {
//             writer.write(data, encoding, callback);
//           } else {
//             // see if we should continue, or wait
//             // don't pass the callback, because we're not done yet.
//             ok = writer.write(data, encoding);
//           }
//         } while (i > 0 && ok);
//         if (i > 0) {
//           console.log(id);
//           // had to stop early!
//           // write some more once it drains
//           writer.once('drain', write);
//         }
//       }
//     write();
//     };


//     writeTenMillionUsers(writeNeighborhoods, 'utf-8', () => {
//       writeNeighborhoods.end();
//     });
