const isEmpty = require('is-empty');

const { genralInput } = require('./profileValidationHelper/genralValidation');
const { statsInput } = require('./profileValidationHelper/statsValidation');
const { addressInput } = require('./profileValidationHelper/addressValidation');
const { socialInput } = require('./profileValidationHelper/socialValidation');

// Create profile validation
const profileValidation = (input) => {
  const {
    gameName,
    gameId,
    bio,
    role,
    favoriteGun,
    stats,
    address,
    social
  } = input;

  const { genralErrors } = genralInput({
    gameName,
    gameId,
    bio,
    role,
    favoriteGun
  });
  const { statsErrors } = statsInput(stats);
  const { addressErrors } = addressInput(address);
  const { socialErrors } = socialInput(social);

  const errors = [
    ...genralErrors,
    ...statsErrors,
    ...addressErrors,
    ...socialErrors
  ];

  return { errors, isValid: isEmpty(errors) };
};

module.exports = {
  profileValidation
};
