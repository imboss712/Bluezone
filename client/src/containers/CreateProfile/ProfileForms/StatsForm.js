import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

import FormikSelect from '../../CreateMatch/FormHelper/FormikSelect';
import {
  favMapItems,
  perspectiveItems,
  teamTypeItems,
  tierItems
} from '../FormHelpers/Items';

const StatsForm = (props) => {
  const { errors, touched, disable } = props;

  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormikSelect
          name="favoriteMap"
          items={favMapItems}
          label="Favorite Map"
          error={touched.favoriteMap && (errors.favoriteMap ? true : false)}
          disabled={disable}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="server"
          type="text"
          label="Server"
          autoComplete="off"
          InputProps={{
            readOnly: true
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="season"
          type="number"
          label="Season"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="rpValue"
          type="number"
          label="Royale Pass"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormikSelect
          name="teamType"
          items={teamTypeItems}
          label="Team Type"
          error={touched.teamType && (errors.teamType ? true : false)}
          disabled={disable}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormikSelect
          name="perspective"
          items={perspectiveItems}
          label="Perspective"
          error={touched.perspective && (errors.perspective ? true : false)}
          disabled={disable}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          variant="outlined"
          name="kdValue"
          type="number"
          label="FD Ratio"
          autoComplete="off"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormikSelect
          name="tierValue"
          items={tierItems}
          label="Tier"
          error={touched.tierValue && (errors.tierValue ? true : false)}
          disabled={disable}
        />
      </Grid>
    </>
  );
};

export default StatsForm;
