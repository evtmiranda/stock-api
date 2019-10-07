const { body, validationResult } = require('express-validator')

const createUserValidationRules = () => {
  return [
    body('name').isAlpha().isLength({ min: 3, max: 50}).withMessage('O campo name deve possuir apenas letras, mínimo: 3, máximo: 50'),
    body('username').isAlpha().isLength({ min: 3, max: 50}).withMessage('O campo username deve possuir apenas letras, mínimo: 3 máximo: 50'),
    body('password').isLength({ min: 6 }).withMessage('O campo password deve conter pelo menos seis caracteres.'),
    body('profile_id').isInt().withMessage('O campo ProfileId deve possuir apenas valores númericos inteiros.'),
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
  createUserValidationRules,
  validate,
}