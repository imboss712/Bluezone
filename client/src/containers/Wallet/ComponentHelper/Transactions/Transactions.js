import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Transaction from './Transaction/Transaction';

import * as actions from '../../../../store/actions/index';
import Loading from '../../../../ui/Loading/Loading';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const Transactions = (props) => {
  const {
    transaction: { transactionsLoading, transactions },
    OnGetTransactions
  } = props;

  useEffect(() => {
    OnGetTransactions();
  }, [OnGetTransactions]);

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ marginBottom: 1 }}>
        <b>Transactions History</b>
      </Typography>

      <Typography variant="body2" color="textSecondary">
        Your last 10 transactions will be shown here.
      </Typography>

      {transactionsLoading ? (
        <Loading hideImage>Fetching Transactions History...</Loading>
      ) : transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))
      ) : (
        <Suspense>
          <Error hideImage status="204" statusText="No transactions yet." />
        </Suspense>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.wallet
});

const mapDispatchToProps = (dispatch) => ({
  OnGetTransactions: () => dispatch(actions.getTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
