import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';

import * as actions from '../../../../../store/actions/index';
import globalStyles from '../../../../../ui/styles/globalStyles';
import FormikField from '../../../../../ui/FormComponents/FormikField';
import SubmitButton from '../../../../../ui/SubmitButton/SubmitButton';
import Modal from '../../../../../ui/Modal/Modal';

import WalletModal from './WalletModal';

const NotJoined = (props) => {
  const sharedClasses = globalStyles();

  const modalRef = useRef();

  const {
    user,
    tournamentId,
    entryFees,
    discountPercent,
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
      noAction:
        (user && user.amount) < entryFees - (entryFees * discountPercent) / 100,
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
      noAction:
        (user && user.amount) < entryFees - (entryFees * discountPercent) / 100,
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
      <Box sx={{ margin: 'auto' }}>
        <Box className={sharedClasses.box}>
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

        <Typography
          sx={{ color: 'text.secondary' }}
          className={sharedClasses.box}
        >
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
          {({ submitForm, isSubmitting, touched, errors }) => (
            <Form>
              <Box className={sharedClasses.box}>
                <FormikField
                  name="teamCode"
                  label="Teamcode"
                  placeholder="Eg. 7oet_d9Z"
                  error={touched.teamCode && errors.teamCode ? true : false}
                  disabled={
                    isSubmitting || participantStatus === 'Closed'
                      ? true
                      : false
                  }
                />
              </Box>

              <Box className={sharedClasses.box}>
                <SubmitButton
                  createText="Join Team"
                  creatingText="Joining..."
                  isSubmitting={isSubmitting}
                  disabled={
                    isSubmitting ||
                    errors.teamCode ||
                    participantStatus === 'Closed'
                      ? true
                      : false
                  }
                  onClick={submitForm}
                />
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
        <WalletModal entryFees={entryFees} discountPercent={discountPercent} />
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
