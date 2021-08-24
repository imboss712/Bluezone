import React from 'react';
import Grid from '@material-ui/core/Grid';
import MuiTextField from '@material-ui/core/TextField';
import { Autocomplete } from 'formik-material-ui-lab';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import FormikSelect from '../../CreateMatch/FormHelper/FormikSelect';
import { favGunItems, roleItems } from '../FormHelpers/Items';

const InfoForm = (props) => {
  const { errors, touched, disable } = props;

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="gameName"
          type="text"
          label="In Game Name"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="gameId"
          type="number"
          label="Game Id"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          multiline
          minRows={1}
          maxRows={3}
          component={TextField}
          variant="outlined"
          name="bio"
          type="text"
          label="Bio"
          placeholder="Something about yourself"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormikSelect
          name="role"
          items={roleItems}
          label="In Game Role"
          error={errors.role && touched.role ? true : false}
          disabled={disable}
        />
      </Grid>

      <Grid item xs={12}>
        <Field
          component={Autocomplete}
          multiple
          fullWidth
          disabled={disable}
          limitTags={4}
          name="favoriteGun"
          options={favGunItems}
          filterSelectedOptions
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <MuiTextField
              {...params}
              style={{ width: '100%' }}
              variant="outlined"
              name="favoriteGun"
              error={touched.favoriteGun && (errors.favoriteGun ? true : false)}
              helperText={touched.favoriteGun && errors.favoriteGun}
              label="Favorite Guns"
              placeholder="Guns"
            />
          )}
        />
      </Grid>
    </>
  );
};

export default InfoForm;
