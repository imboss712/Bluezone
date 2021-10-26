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
  onBlur,
  error,
  disabled
}) => {
  return (
    <FormControl fullWidth variant="outlined" error={error} disabled={disabled}>
      <InputLabel>{label}</InputLabel>

      <Select
        native
        name={name}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {children}
      </Select>

      <FormHelperText error>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect = ({ name, items, label, error, disabled }) => {
  return (
    <Field
      name={name}
      as={MaterialUISelectField}
      label={label}
      errorString={<ErrorMessage name={name} />}
      error={error}
      disabled={disabled}
    >
      {items.map((item) => (
        <option
          key={item.value === undefined ? '1234' : item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </Field>
  );
};

export default FormikSelect;
