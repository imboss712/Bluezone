import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const FormikAdornment = ({
  name,
  label,
  error,
  disabled = false,
  readOnly = false
}) => {
  return (
    <Field
      as={TextField}
      type="tel"
      id={name}
      label={label}
      name={name}
      error={error}
      disabled={disabled}
      fullWidth
      autoComplete="off"
      helperText={<ErrorMessage name={name} />}
      InputProps={{
        readOnly: readOnly,
        startAdornment: <InputAdornment position="start">+91</InputAdornment>
      }}
    />
  );
};

export default FormikAdornment;
