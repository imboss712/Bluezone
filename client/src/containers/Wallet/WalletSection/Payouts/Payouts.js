import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import * as actions from '../../../../store/actions/index';

import Payout from './Payout/Payout';

import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

const Payouts = (props) => {
  const {
    payout: { payoutsLoading, payouts },
    OnGetPayouts
  } = props;

  useEffect(() => {
    OnGetPayouts();
  }, [OnGetPayouts]);

  return (
    <Box style={{ marginBottom: '16px' }}>
      <Typography style={{ marginBottom: '8px' }}>
        <b>Your Payout Links</b>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Your last 10 payout links will be shown here.
      </Typography>

      {payoutsLoading ? (
        <Loading hideImage>Fetching Payout Links...</Loading>
      ) : payouts.length > 0 ? (
        payouts.map((payout) => <Payout key={payout.id} payout={payout} />)
      ) : (
        <Error hideImage status="204" statusText="No payouts links yet." />
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  payout: state.transaction
});

const mapDispatchToProps = (dispatch) => ({
  OnGetPayouts: () => dispatch(actions.getPayouts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Payouts);
