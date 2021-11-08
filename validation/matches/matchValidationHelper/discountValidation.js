const isEmpty = require('is-empty');

const numberRegex = /^\d+$/;

const discountInput = (input) => {
  const errors = [];

  if (input !== 0 && isEmpty(input)) {
    errors.push({ msg: 'Discount field is required' });
  } else if (!numberRegex.test(input)) {
    errors.push({ msg: 'Discount must be a number' });
  } else if (input < 0 || input > 100) {
    errors.push({ msg: 'Discount must be between 0 to 100%' });
  }

  return { discountErrors: errors };
};

module.exports = { discountInput };
