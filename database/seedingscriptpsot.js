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


// pool.connect(function(err, client, done) {

//     const query = client.query(new pg.Query(`

//       DROP TABLE if exists "properties";
    
    
//      DROP TABLE if exists "neighborhoods";
    
    
    
    
    
//     CREATE TABLE "neighborhoods"
//     (
//      "neighboorhoods_id"        varchar(10) NOT NULL,
//      "transitscore"             decimal NOT NULL,
//      "walkingscore"             decimal NOT NULL,
//      "neighbor_hood_home_value" decimal(4, 2) NOT NULL,
//      "one_year_prediction"      decimal(4,2) NOT NULL,
//      CONSTRAINT "PK_walkingscore" PRIMARY KEY ( "neighboorhoods_id" )
//     );
    
    
    
//     CREATE TABLE "properties"
//     (
//      "listings_id"      serial NOT NULL,
//      "address"          varchar(50) NOT NULL,
//      "price"            serial NOT NULL,
//      "images"           text [] NOT NULL,
//      "state"            varchar(2) NOT NULL,
//      "city"             varchar(50) NOT NULL,
//      "neighborhoodzip"  varchar(10) NULL,
//      "median_zestimate" varchar(50) NOT NULL,
//      "baths"            serial  NOT NULL,
//      "rooms"            serial NOT NULL,
//      "listing_status"   varchar(10) NOT NULL,
//      "sq_ft"            serial NOT NULL,
//      CONSTRAINT "PK_listings" PRIMARY KEY ( "listings_id" ),
//      CONSTRAINT "FK_84" FOREIGN KEY ( "neighborhoodzip" ) REFERENCES "neighborhoods" ( "neighboorhoods_id" )
//     );
    
//     CREATE INDEX "fkIdx_84" ON "properties"
//     (
//      "neighborhoodzip"
//     );
    
//     `))
//     query.on('end', (res) => {
//         // pool shutdown
//         console.log("ending");
//         pool.end()
//     })
//     query.on('error', (res) => {
//         console.log(res);
//     })

//     done()
// });



pool.connect(function(err, client, done) {

    const query = client.query(new pg.Query(`
    INSERT INTO properties (
       address, price, images, state, city, neighboorhoodzip, median_zestimate, baths, rooms, listing_status, sq_ft
    )
        select 
            left(md5(i::text, 50)),
            random() * 1000000::int,
            left(md5(i::text, 50)),
            left(md5(i::text, 2)),
            random_between(2000,6000),
            random() * 1000000::int,
            random_between(1, 6),
            random_between(1, 6),
            cast(cast(random() as integer) as boolean),
            random_between(2000, 10,000)
        from generate_series(1, 10) s(i)
`))
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

