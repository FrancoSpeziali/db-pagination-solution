# Pagination

This assignment will have you building a backend service which allows the frontend to paginate through the data

> Difficulty level: Beginner 🫖🍵

## Keywords

`mongoose`, `schemas`, `sample_airbnb`, `limit()`, `skip()`, `lean()`, `select()`, `query parameters`

## What you will be doing

For this assignment you will have to:

1. Complete the schema
2. Add your route
3. Optimise the `/listings` endpoints

The client (frontend) code has mostly been written, but you may wish to style it

This project assumes you've already had experience with:

- Express.js
- dotenv
- Mongoose / MongoDB (schemas, models and `find()`, `limit()`, `skip()`, `lean()`, `select()`)

## Folder Structure

This repository contains the `client` (frontend) as a subfolder

When you run your node server, it will automatically handle requests to serve the `/client` pages. You can view it in the browser under the URL `http://localhost:3001/`

**There is no need to serve the client separately**

## Getting Started

1. run `npm run setup`
2. run `npm run build`

> Make some tea, this may take a while
> You only need to run these commands once

## Usage

1. run `nodemon server.js` or `node server.js` (if you do not have nodemon installed)

##### 🔥 IMPORTANT! Changing the frontend

If you want to change the client, you must rebuild the static client files

1. run `npm run build`

## Tasks

For these tasks, you are expected to write your code in the file `server.js`

## Task 1 - Loading the sample data

Before we can begin, we will load a sample dataset to work with.

MongoDB provides multiple sample datasets, with sample data for us.

1. Log into your MongoDB account
2. Follow the [instructions](https://docs.atlas.mongodb.com/sample-data/) on how to load the sample dataset

> Note: It may take up to 15 minutes for the dataset to completely load

After this, you should have some new databases / collections:

> sample_airbnb
> sample_analytics
> sample_geospatial
> sample_mflix
> sample_restaurants
> sample_supplies
> sample_training
> sample_weatherdata

We will be using the `sample_airbnb` database.

## Task 2 - Setting up the .env file

1. Using the `.env.example` file as a template, create a `.env` file
2. Add your database connection details to your `.env` file
3. The key `DB_NAME` points to the name of the database you want to connect to. Use the name `sample_airbnb`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up
4. For the other keys, fill in the details as provided to you by your MongoDB service.
5. The key `DB_HOST` is the domain of the MongoDB service you will connect to

## Task 3 - Connecting your server to your database

1. Using the `mongoose.connect()` method, setup the connection to your server inside `server.js`
2. `mongoose.connect()` returns a promise
   - use the `then()` method to display a message saying the connection was successful
   - use the `catch()` method to display a message saying the connection failed
3. Check that your database can connect

> Here is an example of you how might setup your connection string,
> once you have destructured the properties from `process.env`

> `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

## Task 4 - Completing the schema

Most of the schema has already been written, but it still misses a few fields

1. Examine the `listingsAndReviews` collection
2. Modify the `/models/ListingsAndReviews.js` schema so that it includes the following missing fields:
   - amenities
   - images
   - address
   - reviews

> Hint: Some of these fields may exist as subdocuments

## Task 5 - Create a listings endpoint

We will create an endpoint to load all the airbnb listings

1. Create an endpoint with the path `/listings` in `routes/listingsAndReviews.js`. This will be a `GET` endpoint.

2. Import and use the `ListingsAndReviews` model
   - Use `find()` to get everything from the collection
   - Return the results to the user

## Task 6 - Optimising the listings endpoint with lean()

We will further optimise our query

Under the `/listings` endpoint;

1. Use `lean()` to remove all document methods, and further improve the speed

## Task 6 - Optimising the listings endpoint with limit()

If try to view the listings on the frontend [http://localhost:3001/listings](http://localhost:3001/listings), you will notice it will take some time for the results to arrive

We will now optimise the query so that it returns data in a much shorter time

Our client will send the `limit` value as a query parameter

In the `routes/listingsAndReviews.js` file, find the `/listings` endpoint;

1. Use `limit(n)` to limit the results that the endpoint returns
2. For _n_, read the **request** object's `query` parameter `limit`

> Hint: You can access parameters from the **request** object with the `params` property

> Important! `limit()` expects a number, but each property in our `query` object is a string. You should convert this into a number before using it

## Task 7 - Optimising the listings endpoint with select()

We will further optimise our query

Under the `/listings` endpoint;

1. Use `select()` to cherrypick the following fields from the collection:
   - name
   - propertyType
   - beds
   - numberOfReviews
   - price

## Task 8 - Paginating the results

Being able to skip through our results is critical for any application which uses pagination

Our client will send the `skip` value as a query parameter

1. Use the `skip(n)` method to tell our query to skip a certain number of records, where _n_ is the number of results you will skip.

> Hint: You can access query parameters from the **request** object with the `query` property

> Important! `skip()` expects a number, but each property in our `query` object is a string. You should convert this into a number before using it

# Bonus Tasks

## Bonus Task 1 - Styling the frontend

The frontend is severely lacking in style

1. Add your own styles to the frontend React project in `client/src/`

For your changes to take effect, you must rebuild the `client/build` folder with the command `npm run build`
