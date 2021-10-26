import * as Yup from 'yup';

const accountTypeItems = [
  { label: 'Select Account Type', value: undefined },
  { label: 'VPA / UPI', value: 'vpa' },
  { label: 'Bank Account', value: 'bank_account' },
  { label: 'Paytm Wallet', value: 'paytm_wallet' }
];

const validationSchema = Yup.object({
  accountType: Yup.string()
    .required('Required')
    .oneOf(
      ['vpa', 'bank_account', 'paytm_wallet'],
      'Account Type must be one of the following values: VPA/UPI, Bank Account or Paytm Wallet'
    ),
  vpaAddress: Yup.string().when('accountType', {
    is: 'vpa',
    then: Yup.string()
      .required('Required')
      .matches(/^[\w.-]{3,256}@[a-zA-Z]{3,64}$/, 'Invalid UPI Address')
  }),
  bankAccNumber: Yup.string().when('accountType', {
    is: 'bank_account',
    then: Yup.string()
      .required('Required')
      .matches(/^\d{8,20}$/, 'Invalid Bank Account Number')
  }),
  confirmBankAccNumber: Yup.string().when('accountType', {
    is: 'bank_account',
    then: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('bankAccNumber'), null], 'Account Numbers must match')
  }),
  bankIfsc: Yup.string().when('accountType', {
    is: 'bank_account',
    then: Yup.string()
      .required('Required')
      .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC')
  }),
  accHolderName: Yup.string().when('accountType', {
    is: 'bank_account',
    then: Yup.string()
      .required('Required')
      .min(3, 'Account Holder Name must be at least 3 characters')
      .max(50, 'Account Holder Name must be at most 50 characters')
  }),
  paytmNumber: Yup.string().when('accountType', {
    is: 'paytm_wallet',
    then: Yup.string()
      .required('Required')
      .matches(/^[6-9]\d{9}$/, 'Invalid Paytm Number')
  })
});

export { validationSchema, accountTypeItems };
