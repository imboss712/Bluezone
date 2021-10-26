import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

const MaterialUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
  onFocus,
  onBlur,
  required,
  error,
  disabled
}) => {
  return (
    <FormControl fullWidth variant="outlined" error={error} disabled={disabled}>
      <InputLabel required={required}>{label}</InputLabel>

      <Select
        native
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        inputProps={{
          onFocus: () => onFocus()
        }}
      >
        {children}
      </Select>

      <FormHelperText error>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect = ({
  name,
  items,
  label,
  required = false,
  error,
  disabled,
  onBlur,
  onFocus
}) => {
  return (
    <Field
      autoOk
      name={name}
      as={MaterialUISelectField}
      label={label}
      errorString={<ErrorMessage name={name} />}
      required={required}
      error={error}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </Field>
  );
};

export default FormikSelect;
