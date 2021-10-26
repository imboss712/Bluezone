import React, { useState } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../../store/actions/index';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexGrow: 1
  },
  headingText: {
    fontWeight: 'bold',
    padding: theme.spacing(1)
  },
  sortButton: {
    fontWeight: 'bold',
    padding: '2px 8px 2px 14px',
    marginRight: theme.spacing(1.25)
  },
  sortIcon: {
    marginLeft: theme.spacing(0.6)
  }
}));

const MatchSort = (props) => {
  const classes = useStyles();

  const { onSortByDate, onSortByEntry } = props;

  const [sortDateAsc, setSortDate] = useState(true);
  const [sortEntryAsc, setSortEntry] = useState(true);

  const handleSetSortDate = () => {
    setSortDate((prevState) => !prevState);
    onSortByDate(!sortDateAsc);
  };

  const handleSetSortEntry = () => {
    setSortEntry((prevState) => !prevState);
    onSortByEntry(!sortEntryAsc);
  };

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" elevation={0} className={classes.paper}>
        <Typography className={classes.headingText}>Sort By</Typography>

        <Button
          color="primary"
          size="small"
          className={classes.sortButton}
          style={{ marginLeft: 'auto' }}
          onClick={handleSetSortDate}
        >
          Date{' '}
          <span className={classes.sortIcon}>
            {sortDateAsc ? (
              <ArrowDownwardRoundedIcon />
            ) : (
              <ArrowUpwardRoundedIcon />
            )}
          </span>
        </Button>

        <Button
          color="primary"
          size="small"
          className={classes.sortButton}
          onClick={handleSetSortEntry}
        >
          Entry{' '}
          <span className={classes.sortIcon}>
            {sortEntryAsc ? (
              <ArrowDownwardRoundedIcon />
            ) : (
              <ArrowUpwardRoundedIcon />
            )}
          </span>
        </Button>
      </Paper>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSortByDate: (dateType) => dispatch(actions.sortByDate(dateType)),
  onSortByEntry: (entryType) => dispatch(actions.sortByEntry(entryType))
});

export default connect(null, mapDispatchToProps)(MatchSort);
