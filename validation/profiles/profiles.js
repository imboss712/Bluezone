const Validator = require('validator');
const isEmpty = require('is-empty');

const profileValidation = (input) => {
  const errors = [];

  input.gameName = !isEmpty(input.gameName) ? input.gameName : '';
  input.gameId = !isEmpty(input.gameId) ? input.gameId : '';
  input.bio = !isEmpty(input.bio) ? input.bio : '';

  if (Validator.isEmpty(input.gameName, { ignore_whitespace: true })) {
    errors.push({ msg: 'GameName field is required' });
  }

  if (Validator.isEmpty(input.gameId.toString(), { ignore_whitespace: true })) {
    errors.push({ msg: 'GameId field is required' });
  }

  if (
    Validator.isEmpty(input.bio, { ignore_whitespace: true, max_length: 70 })
  ) {
    errors.push({ msg: 'Bio field is required' });
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = { profileValidation };
