import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';

import SuspenseLoading from '../../../../ui/Loading/SuspenseLoading';
import globalStyles from '../../../../ui/styles/globalStyles';

import ParticipantCount from '../Participants/ParticipantsHelper/ParticipantCount';
const SendIdPwd = lazy(() =>
  import('../Participants/ParticipantsHelper/SendIdPwd')
);
const MyTeam = lazy(() => import('../Participants/MyTeam/MyTeam'));

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'sticky',
    top: 10,
    bottom: 10,
    zIndex: 5,
    marginLeft: 'auto'
  },
  statusText: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(0.4, 0.3)
  }
}));

const ShortInfo = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const {
    tournamentId,
    participantStatus,
    entryFees,
    discountPercent,
    participants,
    user,
    matchStatus
  } = props;

  let statusPara = 'Tournament is open to participate.';

  switch (matchStatus) {
    case 'MailUnsent':
      statusPara =
        'Participation closed. Room Id and Password will be sent shortly.';
      break;
    case 'MailSent':
      statusPara =
        'Room Id and Password has been sent. Join the tournament as soon as possible.';
      break;
    case 'Live':
      statusPara =
        'Tournament is Live. No money will be refunded to players who have not joined.';
      break;
    case 'Completed':
      statusPara = 'Tounament is finished. Result will be generated soon.';
      break;
    case 'Result':
      statusPara = 'Result has been published.';
      break;
    default:
      statusPara = `Tournament is ${matchStatus}`;
      break;
  }

  return (
    <Paper
      className={clsx(classes.paper, sharedClasses.paper)}
      variant="outlined"
    >
      <ParticipantCount count={participants} />

      <Divider />

      <Box variant="outlined" className={classes.statusText}>
        <Typography variant="body2" color="textSecondary">
          {matchStatus === 'Open' && participantStatus === 'Full'
            ? 'Participant list is Full.'
            : statusPara}
        </Typography>
      </Box>

      <Divider />

      {user.role === 'admin' ? (
        <Suspense fallback={<SuspenseLoading />}>
          <SendIdPwd tournamentId={tournamentId} matchStatus={matchStatus} />
        </Suspense>
      ) : (
        <Suspense fallback={<SuspenseLoading />}>
          <MyTeam
            tournamentId={tournamentId}
            participantStatus={participantStatus}
            discountPercent={discountPercent}
            entryFees={entryFees}
          />
        </Suspense>
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ShortInfo);
