var pg = require('pg');
var conString = "postgres://admin:@localhost:5432/trillo_cole";
const { Pool, Client } = require('pg')
var connectionString = {
    user: 'admin',
    host: 'localhost',
    database: 'trillo_cole',
    password: null,
    port: 5432,
  };



  var pool = new pg.Pool(connectionString);


client.connect(function(err, client, done) {

    const query = client.query(new pg.Query("SELECT * from products"))
    query.on('row', (row) => {
        console.log(row);
    })
    query.on('end', (res) => {
        // pool shutdown
        console.log("ending");
        pool.end()
    })
    query.on('error', (res) => {
        console.log(res);
    })

    done()
});
const query = client.query(`

DROP TABLE "properties";


DROP TABLE "neighborhoods";





CREATE TABLE "neighborhoods"
(
 "neighboorhoods_id"        varchar(10) NOT NULL,
 "transitscore"             decimal NOT NULL,
 "walkingscore"             decimal NOT NULL,
 "neighbor_hood_home_value" decimal(4, 2) NOT NULL,
 "one_year_prediction"      decimal(4,2) NOT NULL,
 CONSTRAINT "PK_walkingscore" PRIMARY KEY ( "neighboorhoods_id" )
);



CREATE TABLE "properties"
(
 "listings_id"      serial NOT NULL,
 "address"          varchar(50) NOT NULL,
 "price"            serial NOT NULL,
 "images"           text [] NOT NULL,
 "state"            varchar(2) NOT NULL,
 "city"             varchar(50) NOT NULL,
 "address_1"        varchar(50) NOT NULL,
 "neighborhoodzip"  varchar(10) NULL,
 "median_zestimate" varchar(50) NOT NULL,
 "baths"            smallserial NULL,
 "rooms"            smallserial NULL,
 "listing_status"   varchar(10) NOT NULL,
 "sq_ft"            serial NOT NULL,
 CONSTRAINT "PK_listings" PRIMARY KEY ( "listings_id" ),
 CONSTRAINT "FK_84" FOREIGN KEY ( "neighborhoodzip" ) REFERENCES "neighborhoods" ( "neighboorhoods_id" )
);

CREATE INDEX "fkIdx_84" ON "properties"
(
 "neighborhoodzip"
);

`);
query.on('end', ()=>{client.end();});
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })


// `CREATE TABLE "neighborhoods"
// (
//  "neighboorhoods_id"        varchar(10) NOT NULL,
//  "transitscore"             decimal NOT NULL,
//  "walkingscore"             decimal NOT NULL,
//  "neighbor_hood_home_value" decimal(4, 2) NOT NULL,
//  "one_year_prediction"      decimal(4,2) NOT NULL,
//  CONSTRAINT "PK_walkingscore" PRIMARY KEY ( "neighboorhoods_id" )
// );`










// `CREATE TABLE "properties"
// (
//  "listings_id"      serial NOT NULL,
//  "address"          varchar(50) NOT NULL,
//  "price"            serial NOT NULL,
//  "images"           text [] NOT NULL,
//  "state"            varchar(2) NOT NULL,
//  "city"             varchar(50) NOT NULL,
//  "address_1"        varchar(50) NOT NULL,
//  "neighborhoodzip"  varchar(10) NULL,
//  "median_zestimate" varchar(50) NOT NULL,
//  CONSTRAINT "PK_listings" PRIMARY KEY ( "listings_id" ),
//  CONSTRAINT "FK_84" FOREIGN KEY ( "neighborhoodzip" ) REFERENCES "neighborhoods" ( "neighboorhoods_id" )
// );

// CREATE INDEX "fkIdx_84" ON "properties"
// (
//  "neighborhoodzip"
// );`







