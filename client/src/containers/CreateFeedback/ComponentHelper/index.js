import * as Yup from 'yup';

import { satisfyItems, titleItems } from './Items';

const initialValues = {
  satisfy: 'Yes',
  title: 'Account and Login related',
  reason: '',
  suggestion: '',
  value: ''
};

const validationSchema = Yup.object({
  satisfy: Yup.string()
    .required('Required')
    .oneOf(satisfyItems.map((s) => s.value)),
  title: Yup.string()
    .required('Required')
    .oneOf(titleItems.map((t) => t.value)),
  reason: Yup.string().required('Required'),
  suggestion: Yup.string()
});

export { initialValues, validationSchema };
