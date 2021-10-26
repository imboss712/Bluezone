const Validator = require('validator');
const isEmpty = require('is-empty');

const confirmAccNumInput = (input, checkInput) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Confirm Account Number field is required' });
  } else if (!Validator.equals(input.toString(), checkInput.toString())) {
    errors.push({ msg: 'Account Numbers must match' });
  }

  return { confirmAccNumErrors: errors };
};

module.exports = { confirmAccNumInput };
