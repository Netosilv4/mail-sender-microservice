const { emailSender, uniqueSender } = require('../services/senderServices') 

const sendMail = async (req, res) => {
  const { tag, subject, message } = req.body
  const response = await emailSender(tag, subject, message)
  res.status(response.code).json({ message: response.message})
}

const sendUnique = async (req, res) => {
  const { mail, subject, message } = req.body
  const response = await uniqueSender(subject, message, mail)
  res.status(response.code).json({ message: response.message })
}

module.exports = {
  sendMail,
  sendUnique
}