const Validator = require('validator');
const isEmpty = require('is-empty');

const perspectiveRegex = /^(FPP|TPP)$/;

const perspectiveInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Perspective field is required' });
  } else if (!perspectiveRegex.test(input)) {
    errors.push({ msg: 'Invalid perspective field' });
  }

  return { perspectiveErrors: errors };
};

module.exports = { perspectiveInput };
