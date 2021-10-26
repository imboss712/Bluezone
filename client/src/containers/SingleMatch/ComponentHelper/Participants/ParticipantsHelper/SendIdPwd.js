import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Formik, Form } from 'formik';

import * as actions from '../../../../../store/actions/index';
import FormikField from '../../../../../ui/FormComponents/FormikField';
import SubmitButton from '../../../../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../../../../ui/styles/globalStyles';

const SendIdPwd = (props) => {
  const sharedClasses = globalStyles();

  const { tournamentId, onSendDetail } = props;

  return (
    <Box sx={{ margin: 'auto' }}>
      <Typography
        sx={{ color: 'text.secondary' }}
        className={sharedClasses.box}
      >
        Share Room Id and Password
      </Typography>

      <Formik
        initialValues={{
          roomId: '',
          roomPwd: ''
        }}
        validationSchema={Yup.object({
          roomId: Yup.number().required('Required'),
          roomPwd: Yup.number().required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            onSendDetail(tournamentId, values);
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, touched, errors }) => (
          <Form>
            <Box className={sharedClasses.box}>
              <FormikField
                name="roomId"
                label="Room Id"
                type="number"
                placeholder="Eg. 16823266"
                error={touched.roomId && errors.roomId ? true : false}
                disabled={isSubmitting}
              />
            </Box>

            <Box className={sharedClasses.box}>
              <FormikField
                name="roomPwd"
                label="Room Password"
                type="number"
                placeholder="Eg. 16823266"
                error={touched.roomPwd && errors.roomPwd ? true : false}
                disabled={isSubmitting}
              />
            </Box>

            <Box className={sharedClasses.box}>
              <SubmitButton
                createText="Send Room-Id Password"
                creatingText="Sending..."
                isSubmitting={isSubmitting}
                disabled={
                  isSubmitting || errors.roomId || errors.roomPwd ? true : false
                }
                onClick={submitForm}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSendDetail: (matchId, roomData) =>
    dispatch(actions.sendRoomIdPwd(matchId, roomData))
});

export default connect(null, mapDispatchToProps)(SendIdPwd);
