const Validator = require('validator');
const isEmpty = require('is-empty');

const ifscValidationRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

const ifscValidationInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'IFSC field is required' });
  } else if (!ifscValidationRegex.test(input)) {
    errors.push({ msg: 'Invalid IFSC field' });
  }

  return { ifscValidationErrors: errors };
};

module.exports = { ifscValidationInput };
