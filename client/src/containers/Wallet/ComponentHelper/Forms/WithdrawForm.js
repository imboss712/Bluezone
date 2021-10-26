import React, { lazy, Suspense } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';

import MoneyIncrementChip from './FormHelper/MoneyIncrementChip';

import * as actions from '../../../../store/actions/index';
import globalStyles from '../../../../ui/styles/globalStyles';
import SubmitButton from '../../../../ui/SubmitButton/SubmitButton';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const WithdrawForm = (props) => {
  const sharedClasses = globalStyles();

  const { user, currentAmount, onRequestMoney } = props;

  return (
    <>
      {user.role === 'admin' ? (
        <Suspense>
          <Error
            status="401"
            statusText="Admin is not allowed to withdraw cash "
            hideImage
          />
        </Suspense>
      ) : currentAmount < 200 ? (
        <Suspense>
          <Error
            status="400"
            statusText="Keep winning and withdraw your winnings once they exceed Rs. 200"
            hideImage
            hideButton
          />
        </Suspense>
      ) : (
        <>
          {user.isBank ? (
            <Formik
              initialValues={{
                amount: 100
              }}
              validationSchema={Yup.object({
                amount: Yup.number()
                  .required('Required')
                  .positive()
                  .integer()
                  .min(50)
                  .max(currentAmount)
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  onRequestMoney({ requestedAmount: values.amount });
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting, touched, errors }) => (
                <Form>
                  <Box className={sharedClasses.box}>
                    <Field
                      as={TextField}
                      type="number"
                      id="amount"
                      label="Withdraw Money"
                      name="amount"
                      error={errors.amount && touched.amount ? true : false}
                      disabled={isSubmitting}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Rs.</InputAdornment>
                        )
                      }}
                      autoComplete="off"
                      fullWidth
                      helperText={<ErrorMessage name="amount" />}
                    />
                  </Box>

                  <MoneyIncrementChip />

                  <Box
                    className={clsx(
                      sharedClasses.box,
                      sharedClasses.submitButton
                    )}
                  >
                    <SubmitButton
                      createText="Request"
                      creatingText="Requesting... "
                      isSubmitting={isSubmitting}
                      disabled={isSubmitting || errors.amount ? true : false}
                      onClick={submitForm}
                    />
                  </Box>
                </Form>
              )}
            </Formik>
          ) : null}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onRequestMoney: (amount) => dispatch(actions.requestAmount(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawForm);
