import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.25)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  },
  phone: {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary
  }
}));

const Request = (props) => {
  const classes = useStyles();

  const {
    onSendLink,
    request: { name, phone, requestedAmount }
  } = props;

  const handleSendLink = () => {
    onSendLink({ phone: phone });
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography>
            <b>{name}</b>
          </Typography>
          <Typography variant="body2" className={classes.phone}>
            {phone}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Rs. {requestedAmount}</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendLink}
            disableElevation
          >
            Send Payout Link
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSendLink: (phoneData) => dispatch(actions.sendPayoutLink(phoneData))
});

export default connect(null, mapDispatchToProps)(Request);
