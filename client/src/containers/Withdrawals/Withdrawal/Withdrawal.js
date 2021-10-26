import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

import BankDetail from './BankDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.8, 2.25)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  },
  secondaryText: {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary
  }
}));

const Withdrawal = (props) => {
  const classes = useStyles();

  const {
    request: { _id, name, phone, isBank, requestedAmount }
  } = props;

  const [fetchBank, setFetchBank] = useState(false);

  const handleSetFetchBank = () => {
    setFetchBank(true);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={fetchBank ? 6 : 4}>
          <Typography>
            <b>{name}</b>
          </Typography>

          <Typography variant="body2" className={classes.secondaryText}>
            {phone}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={fetchBank ? 6 : 4}>
          <Typography variant="h6">Rs. {requestedAmount}</Typography>
        </Grid>

        {!fetchBank && (
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSetFetchBank}
              disabled={!isBank}
              disableElevation
            >
              Get Bank Detail
            </Button>
          </Grid>
        )}
      </Grid>

      {fetchBank && <BankDetail userId={_id} amount={requestedAmount} />}
    </Paper>
  );
};

export default Withdrawal;
