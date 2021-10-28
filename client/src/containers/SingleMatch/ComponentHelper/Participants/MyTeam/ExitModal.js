import React, { useEffect } from 'react';
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

const ExitModal = (props) => {
  const classes = useStyles();

  const { entryFees, onGetUser, user, title } = props;

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  return (
    <>
      {title !== 'Remove Teammate' ? (
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
        </>
      ) : null}

      <Box className={classes.amountBox}>
        <Typography>
          <b>Refund Amount:</b>
        </Typography>

        <Typography sx={{ marginLeft: 'auto' }}>
          <b>Rs. {entryFees * 0.9}</b>
        </Typography>
      </Box>

      <Divider />

      <Typography className={classes.info}>
        Only 90% of the joining money will refund to wallet as we will charge
        10% as fine.
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

export default connect(mapStateToProps, mapDispatchToProps)(ExitModal);
