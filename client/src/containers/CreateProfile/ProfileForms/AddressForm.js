import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const AddressForm = () => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="state"
          type="text"
          label="State"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="district"
          type="text"
          label="District"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="city"
          type="text"
          label="City"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="pincode"
          type="text"
          label="Pincode"
          autoComplete="off"
          fullWidth
        />
      </Grid>
    </>
  );
};

export default AddressForm;
