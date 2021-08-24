import React, { lazy, Suspense, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions/index';

import Loading from '../../../components/Loading/Loading';
import SuspenseLoading from '../../../components/Loading/SuspenseLoading';

const DepositeForm = lazy(() => import('../WalletHelper/DepositeForm'));
const WithdrawForm = lazy(() => import('../WalletHelper/WithdrawForm'));

const useStyles = makeStyles((theme) => ({
  amountBox: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  amountSection: {
    padding: theme.spacing(2.5, 4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  amountValue: {
    marginTop: theme.spacing(1.5)
  },
  amountData: {
    fontSize: theme.spacing(4),
    verticalAlign: 'middle'
  },
  moneyForm: {
    padding: theme.spacing(1.25)
  }
}));

const Amount = (props) => {
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
              <Paper variant="outlined" className={classes.amountSection}>
                <Typography>Current Amount</Typography>
                <Typography color="primary" className={classes.amountValue}>
                  Rs. <span className={classes.amountData}>{user.amount}</span>
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper variant="outlined" className={classes.amountSection}>
                <Typography>Requested Amount</Typography>
                <Typography color="primary" className={classes.amountValue}>
                  Rs.{' '}
                  <span className={classes.amountData}>
                    {user.requestedAmount}
                  </span>
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={0} className={classes.amountSection}>
                <Button
                  style={{ marginBottom: '6px' }}
                  color={showDepositeForm ? 'secondary' : 'primary'}
                  disabled={showWithdrawForm ? true : false}
                  variant="contained"
                  disableElevation
                  onClick={toggleDepositeForm}
                >
                  {showDepositeForm ? 'Close Deposite Form' : 'Add Money'}
                </Button>
                <Button
                  style={{ marginTop: '6px' }}
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
              <Box className={classes.moneyForm}>
                <DepositeForm />
              </Box>
            </Suspense>
          ) : null}

          {showWithdrawForm ? (
            <Suspense fallback={<SuspenseLoading />}>
              <Box className={classes.moneyForm}>
                <WithdrawForm amount={user.amount} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Amount);
