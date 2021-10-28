import React, { lazy, Suspense } from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField';
import makeStyles from '@mui/styles/makeStyles';

import api from '../../../../utils/api';
import MoneyIncrementChip from './FormHelper/MoneyIncrementChip';

import * as actions from '../../../../store/actions/index';
import globalStyles from '../../../../ui/styles/globalStyles';
import SubmitButton from '../../../../ui/SubmitButton/SubmitButton';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2.5),
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 3)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  }
}));

const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const DepositeForm = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const { onAddMoney, user } = props;

  const displayRazorpayModal = async (order) => {
    const res = await loadRazorpayScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Unable to load Payment Model. Check your Ineternet Connection !!');
    }

    const options = {
      key: 'rzp_live_oDEatRjEerWXPW',
      amount: order.amount,
      currency: order.currency,
      name: 'Bluezone',
      description: 'Add Money to Wallet',
      image:
        'https://bluezone-assets.s3.ap-south-1.amazonaws.com/bluezone-logo.png',
      order_id: order.id,
      handler: async function (response) {
        const res = await api.post('/payments/verify-order', {
          orderId: order.id,
          paymentId: response.razorpay_payment_id,
          rzpSignature: response.razorpay_signature
        });

        if (res.data.isAuthentic) {
          onAddMoney({ amount: order.amount / 100 });
        }
      },
      theme: { color: '#1976D2' }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleAddMoney = async (amount) => {
    try {
      const order = await api.post('/payments/create-order', {
        amount: amount
      });

      displayRazorpayModal(order.data);
    } catch (err) {
      alert('Some Error Occured!');
    }
  };

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={sharedClasses.headingText} variant="h6">
        <b>Add Cash to Wallet</b>
      </Typography>

      {user.role === 'admin' ? (
        <Suspense>
          <Error
            status="401"
            statusText="Admin is not allowed to add cash"
            hideImage
          />
        </Suspense>
      ) : (
        <Formik
          initialValues={{
            amount: 100
          }}
          validationSchema={Yup.object({
            amount: Yup.number()
              .required('Required')
              .positive()
              .integer()
              .min(1)
              .max(10000)
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              handleAddMoney(values.amount);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, values, touched, errors }) => (
            <Form>
              <Box className={sharedClasses.box}>
                <Field
                  as={TextField}
                  type="number"
                  id="amount"
                  label="Add Money"
                  name="amount"
                  value={values.amount}
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
                className={clsx(sharedClasses.box, sharedClasses.submitButton)}
              >
                <SubmitButton
                  createText="Add"
                  creatingText="Adding... "
                  isSubmitting={isSubmitting}
                  disabled={isSubmitting || errors.amount ? true : false}
                  onClick={submitForm}
                />
              </Box>
            </Form>
          )}
        </Formik>
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onAddMoney: (amount) => dispatch(actions.addAmount(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(DepositeForm);
