const isEmpty = require('is-empty');

const {
  matchDateInput
} = require('./matchValidationHelper/matchDateValidation');
const {
  matchTimeInput
} = require('./matchValidationHelper/matchTimeValidation');
const { teamTypeInput } = require('./matchValidationHelper/teamTypeValidation');
const {
  perspectiveInput
} = require('./matchValidationHelper/perspectiveValidation');
const { serverInput } = require('./matchValidationHelper/serverValidation');
const { mapInput } = require('./matchValidationHelper/mapValidation');
const { entryInput } = require('./matchValidationHelper/entryValidation');

// Create match validation
const validateCreateMatchInput = (input) => {
  const { matchDateErrors } = matchDateInput(input.matchDate);
  const { matchTimeErrors } = matchTimeInput(input.matchTime);
  const { teamTypeErrors } = teamTypeInput(input.teamType);
  const { perspectiveErrors } = perspectiveInput(input.perspective);
  const { serverErrors } = serverInput(input.server);
  const { mapErrors } = mapInput(input.map);
  const { entryErrors } = entryInput(input.entryFees);

  const errors = [
    ...matchDateErrors,
    ...matchTimeErrors,
    ...teamTypeErrors,
    ...perspectiveErrors,
    ...serverErrors,
    ...mapErrors,
    ...entryErrors
  ];

  return { errors, isValid: isEmpty(errors) };
};

// Update match validation
const validateUpdateMatchInput = (input) => {
  const errors = [];

  if (input.matchDate) {
    const { matchDateErrors } = matchDateInput(input.matchDate);
    errors.concat(matchDateErrors);
  }
  if (input.matchTime) {
    const { matchTimeErrors } = matchTimeInput(input.matchTime);
    errors.concat(matchTimeErrors);
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = {
  validateCreateMatchInput,
  validateUpdateMatchInput
};
