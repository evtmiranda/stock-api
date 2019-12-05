const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('name').matches('^[a-zA-Z_]+( [a-zA-Z_]+)*$').withMessage('O campo nome deve possuir apenas letras.'),
    body('name').isLength({ min: 3, max: 50 }).withMessage('O campo nome deve possuir no mínimo 3 e no máximo 50 caracteres.'),
    body('username').isAlpha().withMessage('O campo nome de usuário deve possuir apenas letras.'),
    body('username').isLength({ min: 3, max: 30 }).withMessage('O campo nome de usuário deve possuir no mínimo 3 e no máximo 30 caracteres.'),
    body('password').isLength({ min: 6, max: 8 }).withMessage('O campo senha deve possuir no mínimo 6 e no máximo 8 caracteres.'),
    body('profileId').isInt().withMessage('O campo ProfileId deve possuir apenas valores númericos inteiros.'),
  ]
}

const stockValidationRules = () => {
  return [
    body('lot').not().isEmpty().withMessage('O campo lote é obrigatório.'),
    body('lot').isLength({ max: 50 }).withMessage('O campo lote deve possuir no máximo 50 caracteres.'),
    body('description').not().isEmpty().withMessage('O campo descrição é obrigatório.'),
    body('description').isLength({ max: 100 }).withMessage('O campo descrição deve possuir no máximo 100 caracteres.'),
    body('reference').not().isEmpty().withMessage('O campo referência é obrigatório.'),
    body('reference').isLength({ max: 30 }).withMessage('O campo referência deve possuir no máximo 30 caracteres.'),
    body('quantity').not().isEmpty().withMessage('O campo quantidade é obrigatório.'),
    body('tag').not().isEmpty().withMessage('O campo etiqueta é obrigatório.'),
    body('tag').isLength({ max: 30 }).withMessage('O campo etiqueta deve possuir no máximo 30 caracteres.'),
    body('store').not().isEmpty().withMessage('O campo loja é obrigatório.'),
    body('store').isLength({ max: 30 }).withMessage('O campo loja deve possuir no máximo 30 caracteres.'),
    body('unitValue').not().isEmpty().withMessage('O campo unitário é obrigatório.')
  ]
}

const profileValidationRules = () => {
  return [
    body('name').not().isEmpty().withMessage('O campo nome é obrigatório.'),
    body('name').isLength({ max: 30 }).withMessage('O campo nome deve possuir no máximo 30 caracteres.'),
    body('description').isLength({ max: 100 }).withMessage('O campo descrição deve possuir no máximo 100 caracteres.')
  ]
}

const statusValidationRules = () => {
  return [
    body('description').isLength({ max: 50 }).withMessage('O campo descrição deve possuir no máximo 50 caracteres.')
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
  profileValidationRules,
  statusValidationRules,
  validate,
}
