import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

import Modal from '../../../../../components/Modal/Modal';

import ExitModal from './ExitModal';
import Player from '../Team/Player/Player';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxIcon: {
    display: 'flex',
    alignItems: 'center'
  },
  leaderIcon: {
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const PlayerAction = (props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    matchId,
    participantStatus,
    profile,
    label,
    entryFees,
    AmILeader,
    onRemoveMember
  } = props;

  const [modalProps, setModalProps] = useState({
    title: '',
    noAction: false,
    noActionText: '',
    confirmText: '',
    onConfirmClick: () => console.log('Confirm button clicked!')
  });

  const handleRemoveMember = (matchId, memberId) => {
    modalRef.current.openModal();
    setModalProps({
      title: 'Remove Teammate',
      confirmText: 'Kick Teammate',
      noAction: participantStatus !== 'Open',
      noActionText: `Participation is ${participantStatus}`,
      onConfirmClick: () => {
        onRemoveMember(matchId, memberId);
        setTimeout(() => {
          modalRef.current.closeModal();
        }, 1500);
      }
    });
  };

  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Player profile={profile} />
        </Box>
        {label === 'Leader' ? (
          <Box className={classes.boxIcon}>
            <Tooltip
              title="Leader"
              enterDelay={500}
              TransitionComponent={Zoom}
              placement="top"
              arrow
            >
              <IconButton
                aria-label="leader"
                className={classes.leaderIcon}
                disableRipple
                disableFocusRipple
              >
                <StarsRoundedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ) : AmILeader ? (
          <Box className={classes.boxIcon}>
            <Tooltip
              title="Remove Member"
              enterDelay={500}
              TransitionComponent={Zoom}
              placement="top"
              arrow
            >
              <IconButton
                aria-label="remove-member"
                color="secondary"
                disabled={participantStatus === 'Closed' ? true : false}
                onClick={() => handleRemoveMember(matchId, profile.playerId)}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
      </Box>

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
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveMember: (matchId, memberId) =>
    dispatch(actions.kickTeammate(matchId, memberId))
});

export default connect(null, mapDispatchToProps)(PlayerAction);
