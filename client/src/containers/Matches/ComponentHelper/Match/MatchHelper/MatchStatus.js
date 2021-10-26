import React from 'react';
import Typography from '@mui/material/Typography';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import makeStyles from '@mui/styles/makeStyles';

import green from '@mui/material/colors/green';
import teal from '@mui/material/colors/teal';
import red from '@mui/material/colors/red';
import blue from '@mui/material/colors/blue';
import orange from '@mui/material/colors/orange';
import purple from '@mui/material/colors/purple';

const useStyles = makeStyles((theme) => ({
  statusText: {
    width: 'fit-content',
    padding: theme.spacing(0.25, 0.75),
    fontSize: theme.spacing(1.625),
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1)
  },
  statusIcon: {
    verticalAlign: 'text-top',
    fontSize: theme.spacing(1.75)
  }
}));

const MatchStatus = (props) => {
  const classes = useStyles();

  const { matchStatus, participantStatus } = props;

  let participantStatusValue;
  let matchStatusValue;

  let slotBgColor = green[100];
  let matchBgColor = orange[100];

  switch (participantStatus) {
    case 'Open':
      slotBgColor = green[100];
      participantStatusValue = (
        <>
          <DoneRoundedIcon
            sx={{ color: green[900] }}
            className={classes.statusIcon}
          />{' '}
          Participation Open
        </>
      );
      break;

    case 'Full':
      slotBgColor = teal[100];
      participantStatusValue = (
        <>
          <FiberManualRecordRoundedIcon
            sx={{ color: teal[900] }}
            className={classes.statusIcon}
          />{' '}
          Participation Full
        </>
      );
      break;

    case 'Closed':
      slotBgColor = red[100];
      participantStatusValue = (
        <>
          <CloseRoundedIcon
            sx={{ color: red[900] }}
            className={classes.statusIcon}
          />{' '}
          Participation Closed
        </>
      );
      break;
    default:
      participantStatusValue = null;
      break;
  }

  switch (matchStatus) {
    case 'Live':
      matchBgColor = orange[100];
      matchStatusValue = (
        <>
          <FiberManualRecordRoundedIcon
            sx={{ color: orange[900] }}
            className={classes.statusIcon}
          />{' '}
          Tournament Live
        </>
      );
      break;

    case 'Completed':
      matchBgColor = blue[100];
      matchStatusValue = (
        <>
          <DoneAllRoundedIcon
            sx={{ color: blue[900] }}
            className={classes.statusIcon}
          />{' '}
          Tournament Completed
        </>
      );
      break;

    case 'Result':
      matchBgColor = purple[100];
      matchStatusValue = (
        <>
          <AssignmentTurnedInRoundedIcon
            sx={{ color: purple[900] }}
            className={classes.statusIcon}
          />{' '}
          Result Published
        </>
      );
      break;
    default:
      matchStatusValue = null;
      break;
  }

  return (
    <>
      {participantStatusValue && (
        <Typography
          className={classes.statusText}
          sx={{ backgroundColor: slotBgColor }}
        >
          {participantStatusValue}
        </Typography>
      )}

      {matchStatusValue && (
        <Typography
          className={classes.statusText}
          sx={{ backgroundColor: matchBgColor }}
        >
          {matchStatusValue}
        </Typography>
      )}
    </>
  );
};

export default MatchStatus;
