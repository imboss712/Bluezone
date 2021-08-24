const Validator = require('validator');
const isEmpty = require('is-empty');

const validateTeamcodeInput = (input) => {
  const errors = [];

  input.teamCode = !isEmpty(input.teamCode) ? input.teamCode : '';

  if (Validator.isEmpty(input.teamCode, { ignore_whitespace: true })) {
    errors.push({ msg: 'Teamcode field is required' });
  } else if (input.teamCode.length !== 8) {
    errors.push({ msg: 'Invalid Team Code' });
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = {
  validateTeamcodeInput
};
