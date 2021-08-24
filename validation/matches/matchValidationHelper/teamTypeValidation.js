const Validator = require('validator');
const isEmpty = require('is-empty');

const teamTypeRegex = /^(Solo|Duo|Squad)$/;

const teamTypeInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Team type field is required' });
  } else if (!teamTypeRegex.test(input)) {
    errors.push({ msg: 'Invalid team type field' });
  }

  return { teamTypeErrors: errors };
};

module.exports = { teamTypeInput };
