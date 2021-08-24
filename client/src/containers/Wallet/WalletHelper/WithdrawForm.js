import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import clsx from 'clsx';
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
        name: 'requestedAmount',
        value:
          (values.requestedAmount === '' ? 0 : values.requestedAmount) + money
      }
    };

    handleChange(event);

    values.requestedAmount += money;
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

const WithdrawForm = (props) => {
  const classes = useStyles();

  const { user, amount, onRequestMoney } = props;

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.typography} variant="h6">
        <b>Withdraw Money to Bank / UPI</b>
      </Typography>

      {user.role === 'admin' ? (
        <Error
          status="401"
          statusText="Admin is not allowed to withdraw cash "
          hideImage
        />
      ) : amount < 200 ? (
        <Error
          status="400"
          statusText="Keep winning and withdraw your winnings once they exceed Rs. 200"
          hideImage
          hideButton
        />
      ) : (
        <Formik
          initialValues={{
            requestedAmount: 100
          }}
          validationSchema={Yup.object({
            requestedAmount: Yup.number()
              .required('Required')
              .positive()
              .integer()
              .min(50)
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              onRequestMoney(values);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, errors }) => (
            <Form>
              <Box className={classes.box}>
                <Field
                  component={TextField}
                  variant="outlined"
                  name="requestedAmount"
                  type="number"
                  label="Withdraw Money"
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
                      Requesting...{' '}
                      <CircularProgress size={16} className={classes.icon} />
                    </>
                  ) : (
                    'Request'
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
  onRequestMoney: (amount) => dispatch(actions.requestAmount(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawForm);
