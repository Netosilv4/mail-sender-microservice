const { MongoClient } = require('mongodb');

const URI = process.env.HOST_URI

const client = new MongoClient(URI)

client.connect()

module.exports = {
  client,
}