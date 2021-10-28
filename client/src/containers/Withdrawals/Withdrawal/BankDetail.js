import React, { useEffect, lazy, Suspense, memo } from 'react';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import * as actions from '../../../store/actions/index';
import globalStyles from '../../../ui/styles/globalStyles';
import Loading from '../../../ui/Loading/Loading';
const Error = lazy(() => import('../../../ui/Error/Error'));

const BankAccountType = {
  vpa: 'UPI',
  bank_account: 'Bank Account',
  paytm_wallet: 'Paytm Wallet'
};

const TableLine = (props) => {
  const { keyName, valueName } = props;

  return (
    <TableRow>
      <TableCell>{keyName}</TableCell>
      <TableCell align="right" sx={{ color: '#0D47A1' }}>
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
        <Table sx={{ width: 1 }}>
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

const BankDetail = memo((props) => {
  const sharedClasses = globalStyles();

  const {
    userId,
    amount,
    bank: { bank, loadingBank, bankError },
    onSendLink,
    getDetailById
  } = props;

  useEffect(() => {
    getDetailById(userId);
  }, [getDetailById, userId]);

  const handleSendLink = () => {
    onSendLink({
      userId: userId,
      to: BankAccountType[bank.accountType],
      amount: amount
    });
  };

  if (loadingBank || bank === null) {
    return <Loading hideImage>Loading Bank Details...</Loading>;
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
      <>
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

        <Box className={sharedClasses.box}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendLink}
            disableElevation
          >
            Amount Sent via GPay
          </Button>
        </Box>
      </>
    );
  }
});

const mapStateToProps = (state) => ({
  bank: state.bank,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  getDetailById: (userId) => dispatch(actions.getBankDetailById(userId)),
  onSendLink: (userData) => dispatch(actions.sendPayout(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(BankDetail);
