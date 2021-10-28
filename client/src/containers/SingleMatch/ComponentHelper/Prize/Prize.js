import React, { memo } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import makeStyles from '@mui/styles/makeStyles';

import positionPrizeList from '../../../../datas/prizeList';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%'
  },
  tableCell: {
    color: '#0D47A1',
    fontWeight: 'bold'
  },
  starIcon: {
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
        sx={{ marginBottom: 3 }}
      >
        <Table className={classes.table} aria-label="position-prize-table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#E3F2FD' }}>
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
            <TableRow sx={{ backgroundColor: '#E3F2FD' }}>
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

      <Typography
        color="textSecondary"
        sx={{
          marginTop: 2.5,
          marginBottom: 2,
          marginLeft: 0.5,
          marginRight: 0.5
        }}
      >
        <StarBorderRoundedIcon className={classes.starIcon} />
        Prize money is subject to change based on number of participants.
      </Typography>
    </>
  );
});

export default Prize;
