import React from 'react';
import Typography from '@material-ui/core/Typography';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import { makeStyles } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles((theme) => ({
  status: {
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
            style={{ color: green[900] }}
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
            style={{ color: teal[900] }}
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
            style={{ color: red[900] }}
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
            style={{ color: orange[900] }}
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
            style={{ color: blue[900] }}
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
            style={{ color: purple[900] }}
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
          className={classes.status}
          style={{ backgroundColor: slotBgColor }}
        >
          {participantStatusValue}
        </Typography>
      )}

      {matchStatusValue && (
        <Typography
          className={classes.status}
          style={{ backgroundColor: matchBgColor }}
        >
          {matchStatusValue}
        </Typography>
      )}
    </>
  );
};

export default MatchStatus;
