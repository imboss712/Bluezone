import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Payout from './Payout/Payout';

import * as actions from '../../../../store/actions/index';
import Loading from '../../../../ui/Loading/Loading';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const Payouts = (props) => {
  const {
    payout: { payoutsLoading, payouts },
    OnGetPayouts
  } = props;

  useEffect(() => {
    OnGetPayouts();
  }, [OnGetPayouts]);

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ marginBottom: 1 }}>
        <b>Payouts History</b>
      </Typography>

      <Typography variant="body2" color="textSecondary">
        Your last 10 payouts will be shown here.
      </Typography>

      {payoutsLoading ? (
        <Loading hideImage>Fetching Payouts History...</Loading>
      ) : payouts.length > 0 ? (
        payouts.map((payout) => <Payout key={payout._id} payout={payout} />)
      ) : (
        <Suspense>
          <Error hideImage status="204" statusText="No payouts yet." />
        </Suspense>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  payout: state.wallet
});

const mapDispatchToProps = (dispatch) => ({
  OnGetPayouts: () => dispatch(actions.getPayouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Payouts);
