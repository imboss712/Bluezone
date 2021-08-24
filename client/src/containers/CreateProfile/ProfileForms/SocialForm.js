import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const SocialForm = () => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="instagram"
          type="text"
          label="Instagram"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="youtube"
          type="text"
          label="Youtube"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="twitter"
          type="text"
          label="Twitter"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="facebook"
          type="text"
          label="Facebook"
          autoComplete="off"
          fullWidth
        />
      </Grid>
    </>
  );
};

export default SocialForm;
