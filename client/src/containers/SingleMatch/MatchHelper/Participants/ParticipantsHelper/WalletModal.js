import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  amount: {
    display: 'flex',
    fontWeight: 'bold',
    margin: theme.spacing(2, 0)
  },
  agree: {
    margin: '16px 8px 32px 8px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '14px'
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
      <Box className={classes.amount}>
        <Typography color="secondary">
          <b>Current Balance:</b>
        </Typography>
        <Typography color="secondary" style={{ marginLeft: 'auto' }}>
          <b>Rs. {user.amount}</b>
        </Typography>
      </Box>

      <Divider />

      <Box className={classes.amount}>
        <Typography>
          <b>Joining Amount:</b>
        </Typography>
        <Typography style={{ marginLeft: 'auto' }}>
          <b>Rs. {entryFees}</b>
        </Typography>
      </Box>

      <Divider />

      <Typography className={classes.agree}>
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
