import React, { lazy, Suspense, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../store/actions/index';
import Loading from '../../../ui/Loading/Loading';
import SuspenseLoading from '../../../ui/Loading/SuspenseLoading';

const DepositeForm = lazy(() => import('./Forms/DepositeForm'));
const BankDetails = lazy(() => import('./Forms/BankDetails'));

const useStyles = makeStyles((theme) => ({
  amountBox: {
    padding: theme.spacing(2.5, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  amountData: {
    fontSize: theme.spacing(4),
    verticalAlign: 'middle'
  }
}));

const WalletBalance = (props) => {
  const classes = useStyles();

  const { getUser, user } = props;

  useEffect(() => {
    getUser();
  }, [getUser]);

  const [showDepositeForm, handleDepositeForm] = useState(false);
  const [showWithdrawForm, handleWithdrawForm] = useState(false);

  const toggleDepositeForm = () => {
    handleDepositeForm((prevState) => !prevState);
  };

  const toggleWithdrawForm = () => {
    handleWithdrawForm((prevState) => !prevState);
  };

  return (
    <>
      {user === null ? (
        <Loading hideImage>Fetching Wallet Information...</Loading>
      ) : (
        <>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Paper variant="outlined" className={classes.amountBox}>
                <Typography>Current Amount</Typography>

                <Typography color="primary" sx={{ marginTop: 1.5 }}>
                  ₹ <span className={classes.amountData}>{user.amount}</span>
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper variant="outlined" className={classes.amountBox}>
                <Typography>Requested Amount</Typography>

                <Typography color="primary" sx={{ marginTop: 1.5 }}>
                  ₹{' '}
                  <span className={classes.amountData}>
                    {user.requestedAmount}
                  </span>
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={0} className={classes.amountBox}>
                <Button
                  sx={{ marginBottom: 0.75 }}
                  color={showDepositeForm ? 'secondary' : 'primary'}
                  disabled={showWithdrawForm ? true : false}
                  variant="contained"
                  disableElevation
                  onClick={toggleDepositeForm}
                >
                  {showDepositeForm ? 'Close Deposite Form' : 'Add Money'}
                </Button>

                <Button
                  sx={{ marginTop: 0.75 }}
                  color={showWithdrawForm ? 'secondary' : 'primary'}
                  disabled={showDepositeForm ? true : false}
                  variant="outlined"
                  onClick={toggleWithdrawForm}
                >
                  {showWithdrawForm ? 'Close Withdraw Form' : 'Withdraw Money'}
                </Button>
              </Paper>
            </Grid>
          </Grid>

          {showDepositeForm ? (
            <Suspense fallback={<SuspenseLoading />}>
              <Box sx={{ padding: 1.25 }}>
                <DepositeForm />
              </Box>
            </Suspense>
          ) : null}

          {showWithdrawForm ? (
            <Suspense fallback={<SuspenseLoading />}>
              <Box sx={{ padding: 1.25 }}>
                <BankDetails />
              </Box>
            </Suspense>
          ) : null}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(actions.getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletBalance);
