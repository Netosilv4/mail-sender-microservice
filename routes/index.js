const express = require('express')

const rescue = require('express-rescue')

const { sendMail, sendUnique } = require('../controllers/senderController')

const route = express.Router()  

route.get('/sendmail', rescue(sendMail))

route.get('/sendunique', rescue(sendUnique))

const genericError = async (err, req, res, next) => {
  res.status(404).json({ message: `${err}` })
}

route.use(genericError)

module.exports = route