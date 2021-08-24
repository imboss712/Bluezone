import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

import Regulations from './RulesList';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%'
  },
  tableContainer: {
    marginBottom: theme.spacing(3)
  },
  tableRow: {
    backgroundColor: '#E3F2FD'
  },
  tableCell: {
    color: '#0D47A1',
    fontWeight: 'bold'
  }
}));

const Rules = memo(() => {
  const classes = useStyles();

  return (
    <>
      {Regulations.map((reg) => {
        return (
          <TableContainer
            key={reg._id}
            component={Paper}
            variant="outlined"
            elevation={0}
            className={classes.tableContainer}
          >
            <Table className={classes.table} aria-label="rules-table">
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableCell}>
                    {reg.title}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reg.rules.map((rule, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{rule}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </>
  );
});

export default Rules;
