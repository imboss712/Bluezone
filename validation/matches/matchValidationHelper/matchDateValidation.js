const Validator = require('validator');
const isEmpty = require('is-empty');
const isAfter = require('date-fns/isAfter');
const isDate = require('date-fns/isDate');

const matchDateInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input)) {
    errors.push({ msg: 'Match date field is required' });
  } else if (!isDate(new Date(input))) {
    errors.push({ msg: 'Invalid Match date' });
  } else if (!isAfter(new Date(input), new Date())) {
    errors.push({ msg: 'Match date can not be past date' });
  }

  return { matchDateErrors: errors };
};

module.exports = { matchDateInput };
