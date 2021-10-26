const Validator = require('validator');
const isEmpty = require('is-empty');

const accNumRegex = /^\d{8,20}$/;

const accNumInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Account Number field is required' });
  } else if (!accNumRegex.test(input)) {
    errors.push({ msg: 'Invalid Account Number' });
  }

  return { accNumErrors: errors };
};

module.exports = { accNumInput };
