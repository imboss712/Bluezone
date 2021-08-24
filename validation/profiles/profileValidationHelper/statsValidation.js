const Validator = require('validator');
const isEmpty = require('is-empty');

const mapRegex = /^(Erangel|Miramar|Sanhok)$/;
const serverRegex = /^India$/;
const perspectiveRegex = /^(FPP|TPP)$/;
const teamTypeRegex = /^(Solo|Duo|Squad)$/;
const tierValueRegex = /^(Bronze|Silver|Gold|Platinum|Diamond|Crown|Ace|Ace Master|Ace Dominator|Conqueror)$/;

const statsInput = (input) => {
  const errors = [];

  input.favoriteMap = !isEmpty(input.favoriteMap) ? input.favoriteMap : '';
  input.server = !isEmpty(input.server) ? input.server : '';
  input.season = !isEmpty(input.season) ? input.season : '0';
  input.perspective = !isEmpty(input.perspective) ? input.perspective : '';
  input.teamType = !isEmpty(input.teamType) ? input.teamType : '';
  input.rpValue = !isEmpty(input.rpValue) ? input.rpValue : '0';
  input.kdValue = !isEmpty(input.kdValue) ? input.kdValue : '0.0';
  input.tierValue = !isEmpty(input.tierValue) ? input.tierValue : '';

  // Favorite Map
  if (Validator.isEmpty(input.favoriteMap, { ignore_whitespace: true })) {
    errors.push({ msg: 'Favorite Map field is required' });
  } else if (!mapRegex.test(input.favoriteMap)) {
    errors.push({ msg: 'Invalid Favorite Map field' });
  }

  // Server
  if (Validator.isEmpty(input.server, { ignore_whitespace: true })) {
    errors.push({ msg: 'Server field is required' });
  } else if (!serverRegex.test(input.server)) {
    errors.push({ msg: 'Invalid Server field' });
  }

  // Season
  if (!Validator.isInt(input.season.toString(), { min: 19, max: 30 })) {
    errors.push({ msg: 'Invalid Season field' });
  }

  // Persepective
  if (Validator.isEmpty(input.perspective, { ignore_whitespace: true })) {
    errors.push({ msg: 'Perspective field is required' });
  } else if (!perspectiveRegex.test(input.perspective)) {
    errors.push({ msg: 'Invalid Perspective field' });
  }

  // Team Type
  if (Validator.isEmpty(input.teamType, { ignore_whitespace: true })) {
    errors.push({ msg: 'Team Type field is required' });
  } else if (!teamTypeRegex.test(input.teamType)) {
    errors.push({ msg: 'Invalid Team Type field' });
  }

  // RP
  if (!Validator.isInt(input.rpValue.toString(), { min: 0, max: 100 })) {
    errors.push({ msg: 'Invalid RP field' });
  }

  // KD
  if (!Validator.isFloat(input.kdValue.toString(), { min: 0.0, max: 15.0 })) {
    errors.push({ msg: 'Invalid FD field' });
  }

  // Tier
  if (Validator.isEmpty(input.tierValue, { ignore_whitespace: true })) {
    errors.push({ msg: 'Tier field is required' });
  } else if (!tierValueRegex.test(input.tierValue)) {
    errors.push({ msg: 'Invalid Tier field' });
  }

  return { statsErrors: errors };
};

module.exports = { statsInput };
