const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    // body('name').toString.split(' ').every(function (word) { return isAlpha(word, ['pt-BR']).withMessage('Name must contain only characters, minimum: 3, maximum: 50'); }),
    // body('name').split(' ').every(function (word) { return isAlpha(['pt-BR']).isLength({ min: 3, max: 50}).withMessage('Name must contain only characters, minimum: 3, maximum: 50')); }
    body('name').trim().isAlpha(['pt-BR']).withMessage('Name must contain only characters'),
    body('name').trim().escape().isLength({ min: 3, max: 50}).withMessage('Name must contain only characters, minimum: 3, maximum: 50'),
    // body('name').whitelist('^[a-zA-Z]+(\s[a-zA-Z]+)?$').isLength({ min: 3, max: 50}).withMessage('Name must contain only characters, minimum: 3, maximum: 50'),

    body('username').isAlpha().isLength({ min: 3, max: 50}).withMessage('Username must contain only characters, minimum: 3 maximum: 50'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),
    body('profileId').isInt().withMessage('Profile Id must contain only integer numbers.'),
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