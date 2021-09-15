const nodemailer = require("nodemailer");
const messageHtml = require('../../message')

async function emailSender(req, res) {
  const { contacts, subject, message } = req.body
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'netosilv44445@gmail.com', // generated ethereal user
      pass: 'mariasilva123', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Neto Silva" <netosilv444445@gmail.com>', // sender address
    to: `${contacts.toString()}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: messageHtml
  });
  console.log(info)
  res.status(200).json({ message: "Mensagem enviada para os contatos fornecidos"})
}

module.exports = emailSender