import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import * as actions from '../../../../store/actions/index';

import Transaction from './Transaction/Transaction';

import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

const Transactions = (props) => {
  const {
    transaction: { transactionsLoading, transactions },
    OnGetTransactions
  } = props;

  useEffect(() => {
    OnGetTransactions();
  }, [OnGetTransactions]);

  return (
    <Box style={{ marginBottom: '16px' }}>
      <Typography style={{ marginBottom: '8px' }}>
        <b>Transactions History</b>
      </Typography>

      <Typography variant="body2" color="textSecondary">
        Your last 20 transactions will be shown here.
      </Typography>

      {transactionsLoading ? (
        <Loading hideImage>Fetching Transactions History...</Loading>
      ) : transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))
      ) : (
        <Error hideImage status="204" statusText="No transactions yet." />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction
});

const mapDispatchToProps = (dispatch) => ({
  OnGetTransactions: () => dispatch(actions.getTransactions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
