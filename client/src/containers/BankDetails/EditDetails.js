import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import Details from './Details';

import Loading from '../../ui/Loading/Loading';
const Error = lazy(() => import('../../ui/Error/Error'));

const EditDetails = (props) => {
  const {
    history,
    auth: { user },
    bank: { loadingBank, bank, bankError },
    onGetDetails,
    onUpdateDetails
  } = props;

  useEffect(() => {
    onGetDetails();
  }, [onGetDetails]);

  if (user && !user.isBank) {
    return <Redirect to="/create-bank-details" />;
  }

  const handleSubmit = (values) => {
    onUpdateDetails(values, history);
  };

  if (loadingBank || bank === null) {
    return <Loading>Fetching Bank Data...</Loading>;
  }

  if (bank === null && bankError && bankError.status) {
    return (
      <Suspense>
        <Error status={bankError.status} statusText={bankError.msg} />
      </Suspense>
    );
  }

  if (bank) {
    return (
      <>
        <Helmet>
          <title>
            Edit Bank Details{' '}
            {user.name === undefined ? null : `- ${user.name}`} | Bluezone
          </title>
          <link
            rel="canonical"
            href="https://www.bluezone.fun/edit-bank-details"
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Edit Bank Details | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/edit-bank-details"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Edit Bank Details | Bluezone" />
        </Helmet>

        <Details
          initialValues={{
            ...bank,
            vpaAddress: bank.vpaAddress === undefined ? '' : bank.vpaAddress,
            bankAccNumber:
              bank.bankAccNumber === undefined ? '' : bank.bankAccNumber,
            confirmBankAccNumber:
              bank.bankAccNumber === undefined ? '' : bank.bankAccNumber,
            bankIfsc: bank.bankIfsc === undefined ? '' : bank.bankIfsc,
            accHolderName:
              bank.accHolderName === undefined ? '' : bank.accHolderName,
            paytmNumber: bank.paytmNumber === undefined ? '' : bank.paytmNumber
          }}
          handleSubmit={handleSubmit}
          edit
        />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  bank: state.bank
});

const mapDispatchToProps = (dispatch) => ({
  onGetDetails: () => dispatch(actions.getBankDetails()),
  onUpdateDetails: (bankData, history) =>
    dispatch(actions.editBankDetails(bankData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
