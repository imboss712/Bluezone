import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import * as actions from '../../../../store/actions/index';
import globalStyles from '../../../../ui/styles/globalStyles';
import Loading from '../../../../ui/Loading/Loading';
import FormNavigation from '../../../../ui/FormNavigation/FormNavigation';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const WithdrawForm = lazy(() => import('./WithdrawForm'));

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

const TableLine = (props) => {
  const { keyName, valueName } = props;

  return (
    <TableRow>
      <TableCell>{keyName}</TableCell>
      <TableCell align="right" style={{ color: '#0d47a1' }}>
        {valueName}
      </TableCell>
    </TableRow>
  );
};

const TableWrapper = (props) => {
  const { title, items } = props;

  return (
    <>
      <Typography
        sx={{ color: 'text.secondary', marginLeft: 0.5, marginBottom: 1 }}
      >
        <b>{title}</b>
      </Typography>

      <TableContainer component={Paper} variant="outlined" elevation={0}>
        <Table sx={{ width: '100%' }}>
          <TableBody>
            {items.map((item) => (
              <TableLine
                key={item.id}
                keyName={item.keyName}
                valueName={item.valueName}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const BankDetails = (props) => {
  const classes = useStyles();
  const sharedClasses = globalStyles();

  const {
    user,
    bank: { bank, loadingBank, bankError },
    getDetails
  } = props;

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  if (!user.isBank) {
    return (
      <FormNavigation
        text="You have not added any account details."
        link="/create-bank-details"
        linkText="Add Account Details"
      />
    );
  }

  if (loadingBank || bank === null) {
    return <Loading hideImage>Loading...</Loading>;
  }

  if (bank === null && bankError && bankError.status) {
    return (
      <Suspense>
        <Error hideImage status={bankError.status} statusText={bankError.msg} />
      </Suspense>
    );
  }

  if (bank) {
    return (
      <Paper className={classes.paper} variant="outlined">
        <Typography className={sharedClasses.headingText} variant="h6">
          <b>Withdraw Money to Bank / UPI</b>
        </Typography>

        <Box className={sharedClasses.box} sx={{ textAlign: 'left' }}>
          {bank.accountType === 'vpa' ? (
            <TableWrapper
              title="UPI"
              items={[
                { id: 11, keyName: 'UPI Address', valueName: bank.vpaAddress }
              ]}
            />
          ) : null}

          {bank.accountType === 'bank_account' ? (
            <TableWrapper
              title="Bank Account"
              items={[
                {
                  id: 21,
                  keyName: 'Account Number',
                  valueName: bank.bankAccNumber
                },
                { id: 22, keyName: 'IFSC Code', valueName: bank.bankIfsc },
                { id: 23, keyName: 'Name', valueName: bank.accHolderName }
              ]}
            />
          ) : null}

          {bank.accountType === 'paytm_wallet' ? (
            <TableWrapper
              title="Paytm Wallet"
              items={[
                {
                  id: 31,
                  keyName: 'Paytm Number',
                  valueName: bank.paytmNumber
                }
              ]}
            />
          ) : null}
        </Box>

        <Box className={sharedClasses.box} sx={{ textAlign: 'left' }}>
          <Typography sx={{ fontSize: 14, marginLeft: 0.5 }}>
            Amount will be credited to this account.{' '}
            <Link to="/edit-bank-details">Click here to change</Link>
          </Typography>
        </Box>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <Suspense>
          <WithdrawForm currentAmount={user.amount} />
        </Suspense>
      </Paper>
    );
  }
};

const mapStateToProps = (state) => ({
  bank: state.bank,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  getDetails: () => dispatch(actions.getBankDetails())
});

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);
