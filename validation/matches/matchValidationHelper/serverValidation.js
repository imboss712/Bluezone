const Validator = require('validator');
const isEmpty = require('is-empty');

const serverRegex = /^India$/;

const serverInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Server field is required' });
  } else if (!serverRegex.test(input)) {
    errors.push({ msg: 'Invalid Server field' });
  }

  return { serverErrors: errors };
};

module.exports = { serverInput };
