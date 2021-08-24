import React from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useFormikContext, Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../../utils/api';
import * as actions from '../../../store/actions/index';

import Error from '../../../components/Error/Error';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
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
  chipBox: {
    margin: theme.spacing(1, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 2.8)
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1, 1.5)
    }
  },
  typography: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  moneyChipArray: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  moneyChip: {
    margin: theme.spacing(0.5)
  },
  submitBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
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

const moneyChip = [
  { key: 1, label: '+ 25', value: 25 },
  { key: 2, label: '+ 50', value: 50 },
  { key: 3, label: '+ 100', value: 100 },
  { key: 4, label: '+ 200', value: 200 },
  { key: 5, label: '+ 500', value: 500 }
];

const MoneyIncrement = () => {
  const classes = useStyles();

  const { values, handleChange } = useFormikContext();

  const handleAdd = (money) => {
    const event = {
      target: {
        name: 'amount',
        value: (values.amount === '' ? 0 : values.amount) + money
      }
    };

    handleChange(event);

    values.amount += money;
  };

  return (
    <Box className={classes.chipBox}>
      <Paper component="ul" elevation={0} className={classes.moneyChipArray}>
        {moneyChip.map((money) => {
          return (
            <li key={money.key}>
              <Chip
                color="primary"
                label={money.label}
                onClick={() => handleAdd(money.value)}
                className={classes.moneyChip}
                variant="outlined"
              />
            </li>
          );
        })}
      </Paper>
    </Box>
  );
};

const DepositeForm = (props) => {
  const classes = useStyles();

  const { onAddMoney, user } = props;

  const displayRazorpayModal = async (order) => {
    const res = await loadRazorpayScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert(
        'Unable to load Razorpay Payment Model. Check your Ineternet Connection !!'
      );
    }

    const options = {
      key: 'rzp_test_ofSNHjBAHQq8kL',
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
      theme: { color: '#3f51b5' }
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
      <Typography className={classes.typography} variant="h6">
        <b>Add Cash to Wallet</b>
      </Typography>

      {user.role === 'admin' ? (
        <Error
          status="401"
          statusText="Admin is not allowed to add cash"
          hideImage
        />
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
          {({ submitForm, isSubmitting, values, errors }) => (
            <Form>
              <Box className={classes.box}>
                <Field
                  component={TextField}
                  variant="outlined"
                  name="amount"
                  type="number"
                  value={values.amount}
                  label="Add Money"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rs.</InputAdornment>
                    )
                  }}
                  fullWidth
                />
              </Box>

              <MoneyIncrement />

              <Box className={clsx(classes.box, classes.submitBtn)}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting || errors.amount ? true : false}
                  onClick={submitForm}
                  disableElevation
                >
                  {isSubmitting ? (
                    <>
                      Adding...{' '}
                      <CircularProgress size={16} className={classes.icon} />
                    </>
                  ) : (
                    'Add'
                  )}
                </Button>
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
