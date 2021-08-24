import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Pagination from 'material-ui-flat-pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexGrow: 1
  },
  headerTypo: {
    fontWeight: 'bold',
    padding: theme.spacing(1)
  }
}));

const MatchPagination = () => {
  const classes = useStyles();

  const [offset, setOffset] = useState(0);

  const handleClick = (offset) => {
    setOffset(offset);
  };

  return (
    <Box className={classes.root}>
      <Paper variant="outlined" elevation={0} className={classes.paper}>
        <Typography className={classes.headerTypo}>
          Page {offset + 1} of 10
        </Typography>
        <Pagination
          style={{ marginLeft: 'auto' }}
          limit={1}
          offset={offset}
          total={10}
          size="large"
          onClick={(e, offset) => handleClick(offset)}
        />
      </Paper>
    </Box>
  );
};

export default MatchPagination;
