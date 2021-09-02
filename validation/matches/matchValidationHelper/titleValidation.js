const Validator = require('validator');
const isEmpty = require('is-empty');

const titleInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (
    Validator.isEmpty(input, {
      ignore_whitespace: true,
      min_length: 15,
      max_length: 28
    })
  ) {
    errors.push({ msg: 'Title field is required' });
  }

  return { titleErrors: errors };
};

module.exports = { titleInput };
