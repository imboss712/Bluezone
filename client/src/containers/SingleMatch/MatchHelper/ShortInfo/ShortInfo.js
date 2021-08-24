import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import SuspenseLoading from '../../../../components/Loading/SuspenseLoading';
import ParticipantCount from '../Participants/ParticipantsHelper/ParticipantCount';
const SendIdPwd = lazy(() =>
  import('../Participants/ParticipantsHelper/SendIdPwd')
);
const MyTeam = lazy(() => import('../Participants/MyTeam/MyTeam'));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    position: 'sticky',
    top: 10,
    bottom: 10,
    zIndex: 5,
    textAlign: 'center',
    marginLeft: 'auto'
  },
  status: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(0.4, 0.3)
  }
}));

const ShortInfo = (props) => {
  const classes = useStyles();

  const {
    tournamentId,
    participantStatus,
    entryFees,
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
    <Paper className={classes.paper} variant="outlined">
      <ParticipantCount count={participants} />

      <Divider />

      <Box variant="outlined" className={classes.status}>
        <Typography variant="body2" color="textSecondary">
          {matchStatus === 'Open' && participantStatus === 'Full'
            ? 'Participant list is FUll.'
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
