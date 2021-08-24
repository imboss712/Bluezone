import React from 'react';
import { format } from 'date-fns';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

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
  info: {
    fontSize: '13px',
    marginTop: theme.spacing(0.25),
    color: theme.palette.text.secondary
  },
  gridItem: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  }
}));

const Payout = (props) => {
  const classes = useStyles();

  const {
    payout: { status, amount, attempt_count, short_url, created_at }
  } = props;

  let color = grey[100];

  switch (status) {
    case 'issued':
      color = blue[100];
      break;
    case 'processing':
      color = yellow[100];
      break;
    case 'processed':
      color = green[100];
      break;
    case 'cancelled':
      color = red[100];
      break;
    default:
      color = grey[100];
  }

  return (
    <Paper variant="outlined" className={classes.root}>
      <Box className={classes.box}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Typography
              variant="h6"
              style={{ color: green[600], marginLeft: '6px' }}
            >
              Rs. {amount / 100}
            </Typography>
            <Typography
              variant="body2"
              className={classes.info}
              style={{ marginLeft: '6px' }}
            >
              {format(new Date(created_at), 'hh:mm aaa, dd MMM yy')}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <Typography>
              <a target="_blank" rel="noopener noreferrer" href={short_url}>
                {short_url}
              </a>
            </Typography>
            <Typography variant="body2" className={classes.info}>
              Attempts: {attempt_count}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box style={{ textAlign: 'center' }}>
              <Chip
                label={status}
                style={{
                  backgroundColor: color
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Payout;
