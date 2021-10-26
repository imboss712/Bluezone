import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  amountBox: {
    display: 'flex',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0)
  },
  info: {
    margin: theme.spacing(2, 1, 4, 1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.75)
  }
}));

const WalletModal = (props) => {
  const classes = useStyles();

  const { entryFees, onGetUser, user } = props;

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  return (
    <>
      <Box className={classes.amountBox}>
        <Typography color="secondary">
          <b>Current Balance:</b>
        </Typography>

        <Typography color="secondary" sx={{ marginLeft: 'auto' }}>
          <b>Rs. {user.amount}</b>
        </Typography>
      </Box>

      <Divider />

      <Box className={classes.amountBox}>
        <Typography>
          <b>Joining Amount:</b>
        </Typography>

        <Typography sx={{ marginLeft: 'auto' }}>
          <b>Rs. {entryFees}</b>
        </Typography>
      </Box>

      <Divider />

      <Typography className={classes.info}>
        By joining this tournament, you agree to our{' '}
        <Link to="/terms-of-service">Terms of Service</Link> and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Typography>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onGetUser: () => dispatch(actions.getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletModal);
