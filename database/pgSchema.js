var pg = require('pg');
var conString = "postgres://admin:@localhost:5432/trillo_cole";
const Pool = require('pg-pool');
var connectionString = {
    user: 'admin',
    host: 'localhost',
    database: 'trillo_cole',
    password: null,
    port: 5432,
  };



  var pool = new Pool(connectionString);


  pool.connect()
  .then(client =>{

    client.query(`

      DROP TABLE if exists "listings";
    
    
     DROP TABLE if exists "neighborhoods";
    
    
     

     
     CREATE TABLE "neighborhoods"
     (   
      "neighborhood_id"          SERIAL PRIMARY KEY,
      "transitscore"             decimal NOT NULL,
      "walkingscore"             decimal NOT NULL,
      "neighborhood_home_value" decimal(4, 2) NOT NULL,
      "one_year_prediction"      decimal(4,2) NOT NULL
      
     );


     CREATE TABLE "listings"
     (
      "listing_id"       SERIAL PRIMARY KEY,
      "neighborhood_id"  integer NOT NULL,
      "address"           VARCHAR(50) NOT NULL,
      "price"             integer NOT NULL,
      "images"            VARCHAR(500) NOT NULL,
      "state"             VARCHAR(500) NOT NULL,
      "city"              VARCHAR(500) NOT NULL,
      "median_zestimate"  integer NOT NULL,
      "baths"             integer NOT NULL,
      "rooms"             integer NOT NULL,
      "listing_status"    VARCHAR(500) NOT NULL,
      "sq_ft"             integer NOT NULL,
     CONSTRAINT "FK_107" FOREIGN KEY ( "neighborhood_id" ) REFERENCES "neighborhoods" ( "neighborhood_id" )
     );
     CREATE INDEX ON listings(listing_id);
     CREATE INDEX "fkIdx_107" ON "listings"
     (
      "neighborhood_id"
     );
     `)
     .then(res => {
         client.release()
         console.log('client released')
     })
     .catch(e=> {
         client.release()
         console.log("query error: ", e.message, e.stack)
     })
});
