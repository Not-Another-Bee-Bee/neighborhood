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


## CRUD  API Routes 

### Get property listing data from database 

- GET ```app.get('/api/listings', getFromDB);```
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




