const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

// Create a new MongoClient
const client = new MongoClient(uri);

module.exports = client;
