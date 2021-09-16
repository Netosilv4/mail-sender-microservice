const nodemailer = require("nodemailer");

const send = async (subject, message, contacts) => {
  let transporter = nodemailer.createTransport({
    service: process.env.HOST_SERVICE,
    auth: {
      user: process.env.HOST_EMAIL, // generated ethereal user
      pass: process.env.HOST_PASSWORD, // generated ethereal password
    },
  });
  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${process.env.HOST_ORGANIZATION}, <${process.env.HOST_ORG_MAIL}>`, // sender address
    to: `${contacts.toString()}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
  });
  return {
    code: 200,
    message: "Mensagem enviada para os contatos fornecidos", messageID: info.messageId
  }
}

module.exports = {
  send
}