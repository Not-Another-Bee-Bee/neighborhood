# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
# Getting started with App:

1) npm run seedDB
2) npm run react-dev
3) npm run start

# CRUD  API Routes 
### Lising Routes:


* **URL**: /listings/:listingID
 * **Note:** Get property listing data from database 
  * **METHOD:** _`GET`_
  * **Example:** `app.get('/listings/25')`
    Gets all data from the database for listing with the ID of 25
  * **URL Params:** `listingsID = [integer]`
  * **Returns:**
  ```javascript
  listing = {
    listings_id INTEGER NOT NULL,
      neighborhoods_id VARCHAR(10) NOT NULL,
      address VARCHAR(50) NOT NULL,
      price INTEGER NOT NULL,
      images TEXT[] NOT NULL,
      state VARCHAR(20) NOT NULL,
      city VARCHAR(50),
      median_zestimate INTEGER NOT NULL,
      baths INTEGER NOT NULL,
      rooms INTEGER NOT NULL,
      listing_status VARCHAR(20) NOT NULL,
      sq_ft INTEGER NOT NULL,
      transitscore DECIMAL NOT NULL,
      walkingscore DECIMAL NOT NULL,
      neighborhood_home_value DECIMAL(4, 2) NOT NULL,
      one_year_prediction decimal(4, 2) NOT NULL
  }
  ```

 **URL**: /listings/:listingID
 * **Note:** Get all nearby listings within same zipcode that have similar home listing properties(i.e. # of baths, sq-Ft#) based on listingID 
  * **METHOD:** _`GET`_
  * **Example:** `app.get('/listings/25/neighborhood')`
    Gets all data from the database for listing with the ID of 25
  * **URL Params:** `listingsID = [integer]`
  * **Returns:**
  ```javascript
  listings = [
    {
      listings_id INTEGER NOT NULL,
      neighborhoods_id VARCHAR(10) NOT NULL,
      address VARCHAR(50) NOT NULL,
      price INTEGER NOT NULL,
      images TEXT[] NOT NULL,
      state VARCHAR(20) NOT NULL,
      city VARCHAR(50),
      median_zestimate INTEGER NOT NULL,
      baths INTEGER NOT NULL,
      rooms INTEGER NOT NULL,
      listing_status VARCHAR(20) NOT NULL,
      sq_ft INTEGER NOT NULL,
      transitscore DECIMAL NOT NULL,
      walkingscore DECIMAL NOT NULL,
      neighborhood_home_value DECIMAL(4, 2) NOT NULL,
      one_year_prediction decimal(4, 2) NOT NULL
      }
  ],
  ```




  **URL**: '/listings/:listingsID/agents/:agentID/'
    * **NOTES:** POST a listing by a specific agent
    * **METHOD:** _`POST`_
    * **EXAMPLE:** `app.post('/listings/25/agents/2/listing')`
      Posts a listing to the database with ID 25 by an agent user with ID 2
      * **URL Params:** `listingID = [integer], agentID = [integer]`
      * **Request Body:**
      ``` javascript
      listing = {
        listings_id INTEGER NOT NULL,
        neighborhoods_id VARCHAR(10) NOT NULL,
        address VARCHAR(50) NOT NULL,
        price INTEGER NOT NULL,
        images TEXT[] NOT NULL,
        state VARCHAR(20) NOT NULL,
        city VARCHAR(50),
        median_zestimate INTEGER NOT NULL,
        baths INTEGER NOT NULL,
        rooms INTEGER NOT NULL,
        listing_status VARCHAR(20) NOT NULL,
        sq_ft INTEGER NOT NULL
      }
      ```

  **URL**: '/listings/:listingsID/agents/:agentID/'
    * **NOTES:** UPDATE a listing by a specific agent
    * **METHOD:** _`PUT`_
    * **EXAMPLE:** `app.put('/listings/25/agents/2/listing')`
      update a listing on the database with ID 25 by an agent user with ID 2
      * **URL Params:** `listingID = [integer], agentID = [integer]`
      * **Request Body:**
      ``` javascript
      listing = {
        listings_id INTEGER NOT NULL,
        neighborhoods_id VARCHAR(10) NOT NULL,
        address VARCHAR(50) NOT NULL,
        price INTEGER NOT NULL,
        images TEXT[] NOT NULL,
        state VARCHAR(20) NOT NULL,
        city VARCHAR(50),
        median_zestimate INTEGER NOT NULL,
        baths INTEGER NOT NULL,
        rooms INTEGER NOT NULL,
        listing_status VARCHAR(20) NOT NULL,
        sq_ft INTEGER NOT NULL
      }
      ```


    **URL**: '/listings/:listingsID/agents/:agentID/'
    * **NOTES:** delete a listing by a specific agent
    * **METHOD:** _`DELEte`_
    * **EXAMPLE:** `app.delete('/listings/25/agents/2/listing')`
      delete a listing on the database with ID 25 by an agent user with ID 2
      * **URL Params:** `listingID = [integer], agentID = [integer]`
      * **Request Body:**
      None


























 ```app.get('/api/listings', getFromDB);```
  -  original API call to get lisiting from database
  - return body is JSON OBJECT with listings data
  ```var output = [
  {listing_id: 1, address: '225 murcia court', price: 200000, state: 'CA', city: 'walnut creek', zip: "94507", images:[
    "www.amazons3.com/trillo/1/1",
    "www.amazons3.com/trillo/1/2",
    "www.amazons3.com/trillo/1/3"
  ], listingStatus: "forsale", bedCount: 4, bathCount:3, sqft: 3,400, },
  ]```

- GET  ```app.get('/api/listings/:id', getFromDB);```
  - grab a particular listing from database based on ID parameter
  - return body is a single JSON object
  ```{listing_id: 1, address: '225 murcia court', price: 200000, state: 'CA', city: 'walnut creek', neighbordhoodzip: "94507", images:[
    "www.amazons3.com/trillo/1/1",
    "www.amazons3.com/trillo/1/2",
    "www.amazons3.com/trillo/1/3"
  ]}```


- GET  ```app.get('/api/neighborhoods/:id', getFromDB);```
  - grab all nearby homes based on listing id
  - return body is a single JSON object
  ```[
    {listing_id: 1, address: '225 murcia court', price: 200000, state: 'CA', city: 'walnut creek', neighbordhoodzip: "94507", images:[
    "www.amazons3.com/trillo/1/1",
    "www.amazons3.com/trillo/1/2",
    "www.amazons3.com/trillo/1/3"
  ]},
  {},
  ]```



- GET  ```app.get('/api/listings/:id/images', getFromDB);```
  - return images that are associated with only one listing
  - return body is an single JSON object that is an array of image urls
  ```images:[
    "www.amazons3.com/trillo/1/1",
    "www.amazons3.com/trillo/1/2",
    "www.amazons3.com/trillo/1/3"
  ]```

- POST ```app.post("api/database/listing", postToDB);```
  - post a listing to the lisiting database
  - request body is a JSON object 
  ```{address: '225 murcia court', price: 200000, state: 'CA', city: 'walnut creek', zip: "94507", images:[
    "www.amazons3.com/trillo/1/1",
    "www.amazons3.com/trillo/1/2",
    "www.amazons3.com/trillo/1/3"
  ], listingStatus: "forsale", bedCount: 4, bathCount:3, sqft: 3,400, },```

- PUT ```app.put('/database/listing/:id/:param', updateDB);```
  - using the listing ID as a parameter.. update that lisitng in the database
  - request body could vary but should be sent as a JSON object where :param is the property of the listing
    object to be chages

- DELETE ```app.delete('/database/listing/:id', deleteFromDB);```
  - using the listing ID as a parameter.. delete that listing from the database




