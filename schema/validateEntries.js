const validateEntries = (contacts, subject, message) => {
  if (!contacts) return  { code: 400, message: 'Tag não informada !'} 
  if (!subject) return { code: 400, message: 'Assunto não informado !'}
  if (!message) return { code: 400, message: 'Mensagem não informada !' }
  return { code: 200, message: 'Ok !'}
}

module.exports = validateEntries