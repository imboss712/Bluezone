import React from 'react';
import { Formik, Form } from 'formik';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

import BackButton from '../../ui/BackButton/BackButton';
import FormikField from '../../ui/FormComponents/FormikField';
import FormikSelect from '../../ui/FormComponents/FormikSelect';
import FormikAdornment from '../../ui/FormComponents/FormikAdornment';
import SubmitButton from '../../ui/SubmitButton/SubmitButton';
import globalStyles from '../../ui/styles/globalStyles';

import { validationSchema, accountTypeItems } from './FormHelper/index';

const Details = (props) => {
  const classes = globalStyles();

  const { initialValues, handleSubmit, edit } = props;

  return (
    <Box className={classes.root}>
      <Container>
        <BackButton link="/wallet" text="Back To Wallet" />

        <Paper className={classes.paper} variant="outlined">
          <AccountBalanceRoundedIcon
            color="primary"
            className={classes.headingIcon}
          />

          <Typography className={classes.headingText} variant="h5">
            <b>{edit ? 'Edit Bank Details' : 'Add Bank Details'}</b>
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                handleSubmit(values);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting, errors, touched, values }) => (
              <Form>
                <Box className={classes.box}>
                  <FormikSelect
                    name="accountType"
                    label="Account Type"
                    items={accountTypeItems}
                    error={
                      touched.accountType && errors.accountType ? true : false
                    }
                    disabled={isSubmitting ? true : false}
                  />
                </Box>

                {values.accountType === 'vpa' && (
                  <Box className={classes.box}>
                    <FormikField
                      name="vpaAddress"
                      label="Username (UPI/VPA)"
                      placeholder="username@exampleupi"
                      error={
                        touched.vpaAddress && errors.vpaAddress ? true : false
                      }
                      disabled={isSubmitting ? true : false}
                    />
                  </Box>
                )}

                {values.accountType === 'bank_account' && (
                  <>
                    <Box className={classes.box}>
                      <FormikField
                        name="bankAccNumber"
                        label="Account Number"
                        type="number"
                        error={
                          touched.bankAccNumber && errors.bankAccNumber
                            ? true
                            : false
                        }
                        disabled={isSubmitting ? true : false}
                      />
                    </Box>

                    <Box className={classes.box}>
                      <FormikField
                        name="confirmBankAccNumber"
                        label="Confirm Account Number"
                        type="number"
                        error={
                          touched.confirmBankAccNumber &&
                          errors.confirmBankAccNumber
                            ? true
                            : false
                        }
                        disabled={isSubmitting ? true : false}
                      />
                    </Box>

                    <Box className={classes.box}>
                      <FormikField
                        name="bankIfsc"
                        label="IFSC"
                        error={
                          touched.bankIfsc && errors.bankIfsc ? true : false
                        }
                        disabled={isSubmitting ? true : false}
                      />
                    </Box>

                    <Box className={classes.box}>
                      <FormikField
                        name="accHolderName"
                        label="Account Holder Name"
                        error={
                          touched.accHolderName && errors.accHolderName
                            ? true
                            : false
                        }
                        disabled={isSubmitting ? true : false}
                      />
                    </Box>
                  </>
                )}

                {values.accountType === 'paytm_wallet' && (
                  <Box className={classes.box}>
                    <FormikAdornment
                      name="paytmNumber"
                      label="Paytm Number"
                      error={
                        touched.paytmNumber && errors.paytmNumber ? true : false
                      }
                      disabled={isSubmitting ? true : false}
                    />
                  </Box>
                )}

                <Box className={clsx(classes.box, classes.submitButton)}>
                  <SubmitButton
                    createText="Save Details"
                    creatingText="Saving... "
                    updateText="Update Details"
                    updatingText="Updating... "
                    isSubmitting={isSubmitting}
                    edit={edit}
                    disabled={
                      isSubmitting ||
                      errors.accountType ||
                      errors.vpaAddress ||
                      errors.bankAccNumber ||
                      errors.confirmBankAccNumber ||
                      errors.bamkIfsc ||
                      errors.accHolderName ||
                      errors.paytmNumber
                        ? true
                        : false
                    }
                    onClick={submitForm}
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default Details;
