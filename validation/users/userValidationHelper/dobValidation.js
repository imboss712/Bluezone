const Validator = require('validator');
const isEmpty = require('is-empty');
const isBefore = require('date-fns/isBefore');
const isDate = require('date-fns/isDate');

const dobInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Dob field is required' });
  } else if (!isDate(new Date(input))) {
    errors.push({ msg: 'Invalid Date of Birth' });
  } else if (!isBefore(new Date(input), new Date())) {
    errors.push({ msg: 'Date of Birth cannot be future date' });
  }

  return { dobErrors: errors };
};

module.exports = { dobInput };
