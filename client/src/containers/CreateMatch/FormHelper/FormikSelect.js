import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const MaterialUISelectField = ({
  errorString,
  label,
  children,
  value,
  name,
  onChange,
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
  disabled
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
