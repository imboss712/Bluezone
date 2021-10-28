import React from 'react';
import { format } from 'date-fns';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tableBox: {
    margin: theme.spacing(2, 0, 0.5, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1.8, 1.2)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1.6, 0.7)
    }
  },
  table: {
    width: '100%'
  }
}));

const TableLine = (props) => {
  const { keyName, valueName } = props;

  return (
    <TableRow>
      <TableCell>{keyName}</TableCell>
      <TableCell align="right" sx={{ color: '#0D47A1' }}>
        {valueName}
      </TableCell>
    </TableRow>
  );
};

const ProfileData = (props) => {
  const classes = useStyles();

  const {
    user: { name, phone, dob },
    profile: { gameName, gameId }
  } = props;

  return (
    <Box className={classes.tableBox}>
      <TableContainer component={Paper} variant="outlined" elevation={0}>
        <Table className={classes.table}>
          <TableBody>
            <TableLine keyName="Name" valueName={name} />
            <TableLine keyName="Phone" valueName={phone} />
            <TableLine
              keyName="Date of Birth"
              valueName={format(new Date(dob), 'EEE, do MMM yyyy')}
            />
            <TableLine keyName="In Game Name" valueName={gameName} />
            <TableLine keyName="Game Id" valueName={gameId} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProfileData;
