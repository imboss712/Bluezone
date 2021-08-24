import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexGrow: 1
  },
  headerTypo: {
    fontWeight: 'bold',
    padding: theme.spacing(1)
  },
  closeBtn: {
    fontWeight: 'bold',
    padding: '2px 8px 2px 14px'
  },
  filterIcon: {
    marginLeft: theme.spacing(0.6),
    verticalAlign: 'middle'
  }
}));

const MatchFilterDesc = (props) => {
  const classes = useStyles();

  const { count, clearFilter } = props;

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" elevation={0} className={classes.paper}>
        <Typography className={classes.headerTypo}>
          Filter {count > 0 ? `(${count})` : null}
        </Typography>

        {count > 0 ? (
          <Button
            color="primary"
            size="small"
            className={classes.closeBtn}
            style={{ marginLeft: 'auto' }}
            onClick={clearFilter}
          >
            Clear All{' '}
            <span className={classes.filterIcon}>
              <CloseRoundedIcon />
            </span>
          </Button>
        ) : null}
      </Paper>
    </Box>
  );
};

export default MatchFilterDesc;
