const isEmpty = require('is-empty');

const {
  accountTypeInput
} = require('./bankValidationHelper/accountTypeValidation');
const { vpaInput } = require('./bankValidationHelper/vpaValidation');
const { accNumInput } = require('./bankValidationHelper/accNumValidation');
const {
  confirmAccNumInput
} = require('./bankValidationHelper/confirmAccNumValidation');
const {
  ifscValidationInput
} = require('./bankValidationHelper/ifscValidation');
const {
  accHolderInput
} = require('./bankValidationHelper/accHolderValidation');
const { paytmInput } = require('./bankValidationHelper/paytmValidation');

// Bank details input validation
const validateBankInput = (input) => {
  const { accountTypeErrors } = accountTypeInput(input.accountType);

  let errors = [];

  if (accountTypeErrors.length > 0) {
    errors = accountTypeErrors;
  } else if (input.accountType === 'vpa') {
    const { vpaErrors } = vpaInput(input.vpaAddress);

    errors = vpaErrors;
  } else if (input.accountType === 'bank_account') {
    const { accNumErrors } = accNumInput(input.bankAccNumber.toString());
    const { confirmAccNumErrors } = confirmAccNumInput(
      input.confirmBankAccNumber.toString(),
      input.bankAccNumber.toString()
    );
    const { ifscValidationErrors } = ifscValidationInput(input.bankIfsc);
    const { accHolderErrors } = accHolderInput(input.accHolderName);

    errors = [
      ...accNumErrors,
      ...confirmAccNumErrors,
      ...ifscValidationErrors,
      ...accHolderErrors
    ];
  } else if (input.accountType === 'paytm_wallet') {
    const { paytmErrors } = paytmInput(input.paytmNumber.toString());

    errors = paytmErrors;
  }

  return { errors, isValid: isEmpty(errors) };
};

module.exports = { validateBankInput };
