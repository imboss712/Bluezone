const isEmpty = require('is-empty');

const numberRegex = /^\d+$/;

const entryInput = (input) => {
  const errors = [];

  if (isEmpty(input)) {
    errors.push({ msg: 'Entry field is required' });
  } else if (!numberRegex.test(input)) {
    errors.push({ msg: 'Entry Fees must be a number' });
  }

  return { entryErrors: errors };
};

module.exports = { entryInput };
