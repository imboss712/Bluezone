import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tableBox: {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1.8, 1.2)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1.6, 0.7)
    }
  },
  table: {
    width: '100%'
  }
}));

const TableWrapper = (props) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5">{props.title}</Typography>
      <Box className={classes.tableBox}>
        <TableContainer component={Paper} variant="outlined" elevation={0}>
          <Table className={classes.table}>
            <TableBody>{props.children}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableWrapper;
