const Validator = require('validator');
const isEmpty = require('is-empty');

const paytmRegex = /^[6-9]\d{9}$/;

const paytmInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Paytm Number field is required' });
  } else if (!paytmRegex.test(input)) {
    errors.push({ msg: 'Invalid Paytm Number' });
  }

  return { paytmErrors: errors };
};

module.exports = { paytmInput };
