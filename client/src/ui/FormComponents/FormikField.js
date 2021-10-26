import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@mui/material/TextField';

const FormikField = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  error,
  disabled = false
}) => {
  return (
    <Field
      as={TextField}
      type={type}
      id={name}
      label={label}
      name={name}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      fullWidth
      autoComplete="off"
      helperText={<ErrorMessage name={name} />}
    />
  );
};

export default FormikField;
