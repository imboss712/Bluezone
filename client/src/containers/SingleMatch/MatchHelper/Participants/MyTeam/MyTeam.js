import React, { useRef, useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

import Modal from '../../../../../components/Modal/Modal';
import Loading from '../../../../../components/Loading/Loading';

import Teamcode from './Teamcode';
import ExitModal from './ExitModal';
import PlayerAction from './PlayerAction';
import NotJoined from '../ParticipantsHelper/NotJoined';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginBottom: theme.spacing(1.5)
  },
  team: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.25)
  },
  player: {
    padding: theme.spacing(1.25, 0)
  },
  teamAction: {
    textAlign: 'center',
    paddingTop: theme.spacing(2)
  },
  actionButton: {
    display: 'inline-block',
    margin: theme.spacing(1)
  }
}));

const MyTeam = memo((props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    tournamentId,
    participantStatus,
    entryFees,
    user,
    team: { loadingTeam, team },
    onGetTeam,
    onLeaveTeam,
    onRemoveTeam
  } = props;

  const [modalProps, setModalProps] = useState({
    title: '',
    noAction: false,
    noActionText: '',
    confirmText: '',
    onConfirmClick: () => console.log('Confirm button clicked!')
  });

  useEffect(() => {
    onGetTeam(tournamentId);
  }, [onGetTeam, tournamentId]);

  const AmILeader =
    team !== null &&
    team.length === 1 &&
    team[0].players.find((player) => player.playerId === user._id).label ===
      'Leader'
      ? true
      : false;

  const handleLeaveTeam = (matchId, teamId) => {
    modalRef.current.openModal();
    setModalProps({
      title: 'Leave Team',
      confirmText: 'Leave Team',
      noAction: participantStatus !== 'Open',
      noActionText: `Participation is ${participantStatus}`,
      onConfirmClick: () => {
        onLeaveTeam(matchId, teamId);
        setTimeout(() => {
          modalRef.current.closeModal();
        }, 1500);
      }
    });
  };

  const handleRemoveTeam = (matchId) => {
    modalRef.current.openModal();
    setModalProps({
      title: 'Remove Team',
      confirmText: 'Remove Team',
      noAction: participantStatus !== 'Open',
      noActionText: `Participation is ${participantStatus}`,
      onConfirmClick: () => {
        onRemoveTeam(matchId);
        setTimeout(() => {
          modalRef.current.closeModal();
        }, 1500);
      }
    });
  };

  return (
    <>
      {loadingTeam || team === null ? (
        <Loading hideImage>Fetching Own Team...</Loading>
      ) : team.length === 0 || team === [] ? (
        <NotJoined
          tournamentId={tournamentId}
          entryFees={entryFees}
          participantStatus={participantStatus}
        />
      ) : (
        <Box className={classes.root}>
          <Paper elevation={0}>
            <Box className={classes.team}>
              <Typography color="primary">
                <b>My Team</b>
              </Typography>
            </Box>

            <Teamcode teamCode={team[0]._id.teamCode} />

            <Box className={classes.player}>
              <List>
                {team[0].players.map((player) => {
                  return (
                    <PlayerAction
                      key={player.playerId}
                      matchId={team[0]._id.match}
                      profile={player}
                      label={player.label}
                      AmILeader={AmILeader}
                      participantStatus={participantStatus}
                      entryFees={entryFees}
                    />
                  );
                })}
              </List>
            </Box>

            <Divider />

            <Box className={classes.teamAction}>
              <Button
                variant="outlined"
                color="primary"
                disabled={participantStatus === 'Closed' ? true : false}
                className={classes.actionButton}
                onClick={() =>
                  handleLeaveTeam(tournamentId, team[0]._id.teamId)
                }
              >
                Leave Team
              </Button>

              {AmILeader === true ? (
                <Button
                  variant="outlined"
                  color="secondary"
                  disabled={participantStatus === 'Closed' ? true : false}
                  className={classes.actionButton}
                  onClick={() => handleRemoveTeam(tournamentId)}
                >
                  Remove Team
                </Button>
              ) : null}
            </Box>
          </Paper>
        </Box>
      )}

      <Modal
        ref={modalRef}
        title={modalProps.title}
        noAction={modalProps.noAction}
        noActionText={modalProps.noActionText}
        confirmText={modalProps.confirmText}
        onConfirmClick={modalProps.onConfirmClick}
      >
        <ExitModal title={modalProps.title} entryFees={entryFees} />
      </Modal>
    </>
  );
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
  team: state.team
});

const mapDispatchToProps = (dispatch) => ({
  onGetTeam: (matchId) => dispatch(actions.getMyTeam(matchId)),
  onLeaveTeam: (matchId, teamId) =>
    dispatch(actions.leaveTeam(matchId, teamId)),
  onRemoveTeam: (matchId) => dispatch(actions.removeTeam(matchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTeam);
