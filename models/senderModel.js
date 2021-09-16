const { client } = require('./connection')

const getContacts = async (tag) => {
  let contacts = await client.db('mail-sender-database')
    .collection("contacts").find({ 'tag': tag}).toArray()
  return contacts
}

module.exports = {
  getContacts
}