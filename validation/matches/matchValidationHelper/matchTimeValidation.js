const Validator = require('validator');
const isEmpty = require('is-empty');

const timeRegex = /^([01]\d|2[0-3])[:/-]([0-5]\d)$/;

const matchTimeInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Match time field is required' });
  } else if (!timeRegex.test(input)) {
    errors.push({ msg: 'Invalid Match time' });
  }

  return { matchTimeErrors: errors };
};

module.exports = { matchTimeInput };
