const Validator = require('validator');
const isEmpty = require('is-empty');

const pincodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

const addressInput = (input) => {
  const errors = [];

  input.city = !isEmpty(input.city) ? input.city : '';
  input.district = !isEmpty(input.district) ? input.district : '';
  input.state = !isEmpty(input.state) ? input.state : '';
  input.pincode = !isEmpty(input.pincode) ? input.pincode : '';

  if (Validator.isEmpty(input.city, { ignore_whitespace: true })) {
    errors.push({ msg: 'City field is required' });
  }

  if (Validator.isEmpty(input.district, { ignore_whitespace: true })) {
    errors.push({ msg: 'District field is required' });
  }

  if (Validator.isEmpty(input.state, { ignore_whitespace: true })) {
    errors.push({ msg: 'State field is required' });
  }

  if (
    Validator.isEmpty(input.pincode.toString(), { ignore_whitespace: true })
  ) {
    errors.push({ msg: 'Pincode field is required' });
  } else if (!pincodeRegex.test(input.pincode)) {
    errors.push({ msg: 'Invalid Pincode field' });
  }

  return { addressErrors: errors };
};

module.exports = { addressInput };
