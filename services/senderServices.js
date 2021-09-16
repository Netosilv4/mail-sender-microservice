const { getContacts } = require('../models/senderModel')
const validateEntries = require('../schema/validateEntries')
const { send } = require('../schema/sender')

const emailSender = async (tag, subject, message) => {

  const valid = validateEntries(tag, subject, message)

  if (valid.code === 400) return { code: 400, message: valid.message }
    const contacts = await getContacts(tag)
    const contactsEmail = contacts.map((e) => e.mail)

  if (valid.code === 200 && contacts.length > 0) {
    const response = await send(subject, message, contactsEmail)
    return response
  }

  return {
    code: 400,
    message: `Nenhum contato encontrado com a tag ${tag}`
  }
}

const uniqueSender = async (subject, message, mail) => {

  const valid = validateEntries(mail, subject, message)

  if (valid.code === 400) return { code: 400, message: valid.message }

  return await send(subject, message, mail)
}

module.exports = {
  emailSender,
  uniqueSender
}