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
### Listing Routes:


* **URL**: /listings/:listingID
  * **Notes:** Get property listing data from database 
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


* **URL**: /listings/:listingID
  * **Notes:** Get all nearby listings within same zipcode that have similar home listing properties(i.e. # of baths, sq-Ft#) based on listingID 
  * **METHOD:** _`GET`_
  * **Example:** `app.get('/listings/25/neighborhood')`
    Gets all data from the database for listing with the ID of 25
  * **URL Params:** `listingsID = [integer]`
  * **Returns:**
  ```javascript
  listings = {
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




* **URL**: /listings/:listingsID/agents/:agentID
  * **Notes:** POST a listing by a specific agent
  * **METHOD:** _`POST`_
  * **EXAMPLE:** `app.post('/listings/25/agents/2/listing')`
      Posts a listing to the database with ID 25 by an agent user with ID 2
  * **URL Params:** `listingID = [integer], agentID = [integer]`
  * **Request Body:**
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
        sq_ft INTEGER NOT NULL
        }
        ```

* **URL:** /listings/:listingsID/agents/:agentID
  * **Notes:** UPDATE a listing by a specific agent
  * **METHOD:** _`PUT`_
  * **Example:** `app.put('/listings/25/agents/2/listing')`
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


* **URL**: /listings/:listingsID/agents/:agentID
  * **Notes:** delete a listing by a specific agent
  * **METHOD:** _`DELETE`_
  * **Example:** `app.delete('/listings/25/agents/2/listing')`
  delete a listing on the database with ID 25 by an agent user with ID 2
  * **URL Params:** `listingID = [integer], agentID = [integer]`
  * **Request Body:**
      None





