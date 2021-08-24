const Validator = require('validator');
const isEmpty = require('is-empty');

const socialInput = (input) => {
  const errors = [];

  const socialFields = Object.keys(input);

  socialFields.forEach((url) => {
    input[`${url}`] = !isEmpty(input[`${url}`]) ? input[`${url}`] : '';

    if (
      !Validator.isEmpty(input[`${url}`], { ignore_whitespace: true }) &&
      !Validator.isURL(input[`${url}`])
    ) {
      errors.push({ msg: `Invalid ${url} URL` });
    }
  });

  return { socialErrors: errors };
};

module.exports = { socialInput };
