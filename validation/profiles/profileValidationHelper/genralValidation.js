const Validator = require('validator');
const isEmpty = require('is-empty');

const roleRegex = /^(IGL|Sniper|Assaulter|Camper|Fragger|Medic|Support)$/;

const genralInput = (input) => {
  const errors = [];

  input.gameName = !isEmpty(input.gameName) ? input.gameName : '';
  input.gameId = !isEmpty(input.gameId) ? input.gameId : '';
  input.bio = !isEmpty(input.bio) ? input.bio : '';
  input.role = !isEmpty(input.role) ? input.role : '';

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

  if (Validator.isEmpty(input.role, { ignore_whitespace: true })) {
    errors.push({ msg: 'Role field is required' });
  } else if (!roleRegex.test(input.role)) {
    errors.push({ msg: 'Invalid Role field ' });
  }

  if (!Array.isArray(input.favoriteGun)) {
    errors.push({ msg: 'Favorite Gun field should be an Array' });
  } else if (isEmpty(input.favoriteGun) || input.favoriteGun.length === 0) {
    errors.push({ msg: 'Favourite Gun field cannot be empty' });
  }

  return { genralErrors: errors };
};

module.exports = { genralInput };
