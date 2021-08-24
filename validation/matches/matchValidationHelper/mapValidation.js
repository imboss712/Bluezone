const Validator = require('validator');
const isEmpty = require('is-empty');

const mapRegex = /^(Erangel|Miramar|Sanhok)$/;

const mapInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Map field is required' });
  } else if (!mapRegex.test(input)) {
    errors.push({ msg: 'Invalid map field' });
  }

  return { mapErrors: errors };
};

module.exports = { mapInput };
