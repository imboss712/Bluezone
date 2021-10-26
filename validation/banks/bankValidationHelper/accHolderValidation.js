const Validator = require('validator');
const isEmpty = require('is-empty');

const accHolderInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Account Holder Name field is required' });
  }

  return { accHolderErrors: errors };
};

module.exports = { accHolderInput };
