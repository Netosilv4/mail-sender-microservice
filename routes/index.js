const express = require('express')

const rescue = require('express-rescue')

const emailSender = require('../services/emailSender')

const route = express.Router()  

route.get('/sendmail', rescue(emailSender))

const genericError = async (err, req, res, next) => {
  res.status(404).json({ message: `${err}` })
}

route.use(genericError)

module.exports = route