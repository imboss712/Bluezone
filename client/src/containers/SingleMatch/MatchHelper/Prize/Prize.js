import React, { memo } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import { makeStyles } from '@material-ui/core/styles';

import positionPrizeList from './PrizeValue';

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
  },
  bullet: {
    fontSize: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.6)',
    verticalAlign: 'text-top',
    marginRight: 'inherit'
  }
}));

const Prize = memo((props) => {
  const classes = useStyles();

  const { teamType, entry } = props;

  const prizeList = positionPrizeList(teamType, entry);

  return (
    <>
      <TableContainer
        component={Paper}
        variant="outlined"
        elevation={0}
        className={classes.tableContainer}
      >
        <Table className={classes.table} aria-label="position-prize-table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>TEAM POSITION</TableCell>
              <TableCell align="right" className={classes.tableCell}>
                TEAM PRIZE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prizeList.map((p) => {
              return (
                <TableRow key={p.position}>
                  <TableCell>{p.position}</TableCell>
                  <TableCell align="right">Rs. {p.prize}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} variant="outlined" elevation={0}>
        <Table className={classes.table} aria-label="kill-prize-table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell}>
                PER KILL PRIZE
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>
                Rs. {0.2 * entry}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <Typography color="textSecondary" style={{ margin: '20px 4px 16px 4px' }}>
        <StarBorderRoundedIcon className={classes.bullet} />
        Prize money is subject to change based on number of participants.
      </Typography>
    </>
  );
});

export default Prize;
