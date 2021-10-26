const Validator = require('validator');
const isEmpty = require('is-empty');

const vpaRegex = /^[\w.-]{3,256}@[a-zA-Z]{3,64}$/;

const vpaInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'VPA address field is required' });
  } else if (!vpaRegex.test(input)) {
    errors.push({ msg: 'Invalid VPA address field' });
  }

  return { vpaErrors: errors };
};

module.exports = { vpaInput };
