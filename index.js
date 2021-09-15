const express = require('express')

const route = require('./routes')

const app = express();


app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Tudo certo !'})
})

app.use(route)

app.listen(3000, () => console.log('Escutando porta 3000'))