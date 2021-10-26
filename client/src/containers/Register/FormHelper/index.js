import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Required').min(3).max(50),
  dob: Yup.date()
    .typeError('Invalid Date')
    .min(new Date('01-01-1970'), 'Date of Birth must be later than 01/01/1970')
    .max(new Date(), 'Date of Birth must be earlier than Today')
    .required('Required')
    .nullable(),
  phone: Yup.string()
    .required('Required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Mobile Number')
});

export { validationSchema };
