import React from 'react';
import { format } from 'date-fns';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 1),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0.25)
    }
  },
  box: {
    padding: theme.spacing(2)
  },
  date: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.625),
    marginTop: theme.spacing(0.2)
  },
  gridItem: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

const Transaction = (props) => {
  const classes = useStyles();

  const {
    transaction: { from, to, type, subType, paymentAmount, createdAt }
  } = props;

  return (
    <Paper variant="outlined" className={classes.root}>
      <Box className={classes.box}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Typography
              variant="h5"
              style={{
                color: type === 'Credited' ? green[600] : red[600]
              }}
            >
              {type === 'Debited' ? '-' : '+'} {paymentAmount}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Typography>
              From {from} to {to}
            </Typography>
            <Typography variant="body2" className={classes.date}>
              {format(new Date(createdAt), 'hh:mm aa, dd MMM yyyy')}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box style={{ textAlign: 'center' }}>
              <Chip
                label={subType}
                style={{
                  backgroundColor: type === 'Credited' ? green[50] : red[50]
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Transaction;
