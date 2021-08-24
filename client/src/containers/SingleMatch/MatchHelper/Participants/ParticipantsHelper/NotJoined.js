import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../../store/actions/index';

import Modal from '../../../../../components/Modal/Modal';
import WalletModal from './WalletModal';

const useStyles = makeStyles((theme) => ({
  teamText: {
    color: theme.palette.text.secondary
  },
  root: {
    margin: 'auto'
  },
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

const NotJoined = (props) => {
  const classes = useStyles();

  const modalRef = useRef();

  const {
    user,
    tournamentId,
    entryFees,
    participantStatus,
    onCreateTeam,
    onJoinTeam
  } = props;

  const [modalProps, setModalProps] = useState({
    title: '',
    noAction: false,
    noActionText: '',
    confirmText: '',
    onConfirmClick: () => console.log('Confirm button clicked!')
  });

  const handleCreateTeam = () => {
    modalRef.current.openModal();
    setModalProps({
      title: 'Create Team',
      noAction: (user && user.amount) < entryFees,
      noActionText:
        'Insufficient balance! Please go to wallet, add cash and then create/join team.',
      confirmText: 'Pay and Create Team',
      onConfirmClick: () => {
        onCreateTeam(tournamentId);
        setTimeout(() => {
          modalRef.current && modalRef.current.closeModal();
        }, 1500);
      }
    });
  };

  const handleJoinTeam = (values) => {
    modalRef.current.openModal();
    setModalProps({
      title: 'Join Team',
      noAction: (user && user.amount) < entryFees,
      noActionText:
        'Insufficient balance! Please go to wallet, add cash and then create/join team.',
      confirmText: 'Pay and Join Team',
      onConfirmClick: () => {
        onJoinTeam(tournamentId, values);
        setTimeout(() => {
          modalRef.current && modalRef.current.closeModal();
        }, 1500);
      }
    });
  };

  return (
    <>
      <Box className={classes.createTeam}>
        <Box className={classes.box}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disableElevation
            disabled={participantStatus === 'Closed' ? true : false}
            onClick={handleCreateTeam}
          >
            Create Team
          </Button>
        </Box>
        <Typography className={clsx(classes.teamText, classes.box)}>
          OR
        </Typography>
        <Formik
          initialValues={{
            teamCode: ''
          }}
          validationSchema={Yup.object({
            teamCode: Yup.string()
              .required('Required')
              .length(8, 'Teamcode must be 8 digit long')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              handleJoinTeam(values);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Box className={classes.box}>
                <Field
                  component={TextField}
                  variant="outlined"
                  name="teamCode"
                  type="text"
                  label="Teamcode"
                  placeholder="Eg. 7oet_d9Z"
                  autoComplete="off"
                  fullWidth
                />
              </Box>

              <Box className={classes.box}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={
                    isSubmitting ||
                    errors.teamCode ||
                    participantStatus === 'Closed'
                      ? true
                      : false
                  }
                  onClick={submitForm}
                  disableElevation
                >
                  {isSubmitting ? (
                    <>
                      Joining...{' '}
                      <CircularProgress size={16} className={classes.icon} />
                    </>
                  ) : (
                    'Join Team'
                  )}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Modal
        ref={modalRef}
        title={modalProps.title}
        noAction={modalProps.noAction}
        noActionText={modalProps.noActionText}
        confirmText={modalProps.confirmText}
        onConfirmClick={modalProps.onConfirmClick}
      >
        <WalletModal entryFees={entryFees} />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onCreateTeam: (matchId) => dispatch(actions.createTeam(matchId)),
  onJoinTeam: (matchId, joinTeamdata) =>
    dispatch(actions.joinTeam(matchId, joinTeamdata))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotJoined);
