import React from 'react';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import red from '@mui/material/colors/red';
import green from '@mui/material/colors/green';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 1),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 0.25)
    }
  },
  box: {
    padding: theme.spacing(2)
  },
  gridItem: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  secondaryText: {
    color: theme.palette.text.secondary,
    fontSize: theme.spacing(1.625),
    marginTop: theme.spacing(0.2)
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
              sx={{
                color: type === 'Credited' ? green[600] : red[600]
              }}
            >
              {type === 'Debited' ? '-' : '+'} ₹{paymentAmount}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Typography>
              From {from} to {to}
            </Typography>

            <Typography variant="body2" className={classes.secondaryText}>
              {format(new Date(createdAt), 'hh:mm aa, dd MMM yyyy')}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Chip
                label={subType}
                sx={{
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
