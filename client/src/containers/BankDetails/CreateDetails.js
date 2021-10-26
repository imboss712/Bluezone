import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';

import { accountTypeItems } from './FormHelper/index';
import Details from './Details';

const CreateDetails = (props) => {
  const {
    auth: { user },
    onCreateDetails,
    history
  } = props;

  if (user && user.isBank) {
    return <Redirect to="/wallet" />;
  }

  const handleSubmit = (values) => {
    onCreateDetails(values, history);
  };

  return (
    <>
      <Helmet>
        <title>
          Add Bank Details {user.name === undefined ? null : `- ${user.name}`} |
          Bluezone
        </title>
        <link
          rel="canonical"
          href="https://www.bluezone.fun/create-bank-details"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Add Bank Details | Bluezone" />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/create-bank-details"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Add Bank Details | Bluezone" />
      </Helmet>

      <Details
        initialValues={{
          accountType: accountTypeItems[0].value,
          vpaAddress: '',
          bankAccNumber: '',
          confirmBankAccNumber: '',
          bankIfsc: '',
          accHolderName: '',
          paytmNumber: ''
        }}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onCreateDetails: (bankData, history) =>
    dispatch(actions.createBankDetails(bankData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDetails);
