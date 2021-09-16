const express = require('express')

const route = require('./routes')

const app = express();

const cors = require('cors')

const PORT = process.env.PORT || 3030

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Seja bem vindo ao MailSender !'})
})

app.use(route)

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))