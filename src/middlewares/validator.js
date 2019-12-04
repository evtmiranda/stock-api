const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('name').matches('^[a-zA-Z_]+( [a-zA-Z_]+)*$').withMessage('O campo nome deve possuir apenas letras.'),
    body('name').isLength({ min: 3, max: 50}).withMessage('O campo nome deve possuir no mínimo 3 e no máximo 50 caracteres.'),
    body('username').isAlpha().withMessage('O campo nome de usuário deve possuir apenas letras.'),
    body('username').isLength({ min: 3, max: 30}).withMessage('O campo nome de usuário deve possuir no mínimo 3 e no máximo 30 caracteres.'),
    body('password').isLength({ min: 6, max: 8 }).withMessage('O campo senha deve possuir no mínimo 6 e no máximo 8 caracteres.'),
    body('profileId').isInt().withMessage('O campo ProfileId deve possuir apenas valores númericos inteiros.'),
  ]
}

const stockValidationRules = () => {
  return [
    body('lot').not().isEmpty().withMessage('O campo lot é obrigatório.'),
    body('description').not().isEmpty().withMessage('O campo description é obrigatório.'),
    body('reference').not().isEmpty().withMessage('O campo reference é obrigatório.'),
    body('quantity').not().isEmpty().withMessage('O campo quantity é obrigatório.'),
    body('tag').not().isEmpty().withMessage('O campo tag é obrigatório.'),
    body('store').not().isEmpty().withMessage('O campo store é obrigatório.'),
    body('unitValue').not().isEmpty().withMessage('O campo unitValue é obrigatório.'),
    body('entry.date').not().isEmpty().withMessage('O campo entry.date é obrigatório.'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ field: err.param, message: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  stockValidationRules,
  userValidationRules,
  validate,
}
