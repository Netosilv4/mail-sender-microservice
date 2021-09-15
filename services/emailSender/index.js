const nodemailer = require("nodemailer");

async function emailSender(req, res) {
  const { contacts, subject, message } = req.body
  let transporter = nodemailer.createTransport({
    service: process.env.HOST_SERVICE,
    auth: {
      user: process.env.HOST_EMAIL, // generated ethereal user
      pass: process.env.HOST_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Neto Silva" <netosilv444445@gmail.com>', // sender address
    to: `${contacts.toString()}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
  });
  console.log(info)
  res.status(200).json({ message: "Mensagem enviada para os contatos fornecidos"})
}

module.exports = emailSender