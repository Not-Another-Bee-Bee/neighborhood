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

### Get general data from database

- GET ```app.get('/database/listings', getFromDB);```
  -  original API call to get lisiting from database

- GET  ```app.get('/database/listings/:id', getFromDB);```
  - grab a paticulr song from database based on ID parameter

- POST ```app.post("/database/listing", postToDB);```
  - post a listing to the lisiting database

- PUT ```app.put('/database/listing/:id', updateDB);```
  - using the listing ID as a parameter.. update that lisitng in the database

- DELETE ```app.delete('/database/listing/:id', deleteFromDB);```
  - using the listing ID as a parameter.. delete that listing from the database




