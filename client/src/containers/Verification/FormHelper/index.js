import * as Yup from 'yup';

const validationSchema = Yup.object({
  phone: Yup.string()
    .required('Required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Mobile Number'),
  code: Yup.string()
    .required('Required')
    .matches(/^\d{6}$/, 'Invalid Verification Code')
});

export { validationSchema };
