const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('name').matches('^[a-zA-Z_]+( [a-zA-Z_]+)*$').withMessage('O campo name deve possuir apenas letras.'),
    body('username').isAlpha().withMessage('O campo username deve possuir apenas letras.'),
    body('username').isLength({ min: 3, max: 50}).withMessage('O campo name deve possuir no mínimo 3 caracteres e no máximo 50 caracteres.'),
    body('password').isLength({ min: 6 }).withMessage('O campo password deve conter pelo menos seis caracteres.'),
    body('profileId').isInt().withMessage('O campo ProfileId deve possuir apenas valores númericos inteiros.'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}