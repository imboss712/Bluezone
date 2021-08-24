import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatISO, format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';
import Register from './Register';

import Loading from '../../components/Loading/Loading';

const UpdateAccount = (props) => {
  const {
    auth: { loading, user },
    onGetUser,
    onUpdateAccount,
    history
  } = props;

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  const handleSubmit = (values) => {
    onUpdateAccount(
      {
        name: values.name,
        dob: formatISO(new Date(values.dob), {
          representation: 'date'
        })
      },
      history
    );
  };

  if (loading) {
    return <Loading>Fetching User Data...</Loading>;
  }

  if (user) {
    const dateOfBirth = format(new Date(user.dob), 'yyyy-MM-dd');

    return (
      <>
        <Helmet>
          <title>
            Update Account {user.name === undefined ? null : `- ${user.name}`} |
            Bluezone
          </title>
          <link rel="canonical" href="https://www.bluezone.fun/edit-account" />
          <meta name="robots" content="noindex, nofollow" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Update Account | Bluezone" />
          <meta
            property="og:url"
            content="https://www.bluezone.fun/edit-account"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Update Account | Bluezone" />
        </Helmet>

        <Register
          initialValues={{
            name: user.name,
            dob: dateOfBirth,
            phone: user.phone
          }}
          handleSubmit={handleSubmit}
          edit
        />
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onGetUser: () => dispatch(actions.getUser()),
  onUpdateAccount: (userData, history) =>
    dispatch(actions.updateUser(userData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccount);
