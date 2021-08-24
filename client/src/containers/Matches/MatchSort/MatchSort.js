import React, { useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../store/actions/index';

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
  headerTypo: {
    fontWeight: 'bold',
    padding: theme.spacing(1)
  },
  sortBtn: {
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
        <Typography className={classes.headerTypo}>Sort By</Typography>

        <Button
          color="primary"
          size="small"
          className={classes.sortBtn}
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
          className={classes.sortBtn}
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
