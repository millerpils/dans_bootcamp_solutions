const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URL
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

async function dbStart() {
  try {
    // Create client
    const client = new MongoClient(url);

    // Use connect method to connect to the server
    return await client.connect();
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = dbStart;
