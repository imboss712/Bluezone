const Validator = require('validator');
const isEmpty = require('is-empty');

const accountTypeRegex = /^(vpa|bank_account|paytm_wallet)$/;

const accountTypeInput = (input) => {
  const errors = [];

  input = !isEmpty(input) ? input : '';

  if (Validator.isEmpty(input, { ignore_whitespace: true })) {
    errors.push({ msg: 'Account Type field is required' });
  } else if (!accountTypeRegex.test(input)) {
    errors.push({ msg: 'Invalid Account Type field' });
  }

  return { accountTypeErrors: errors };
};

module.exports = { accountTypeInput };
