import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../../ui/Loading/Loading';

const AdminRoutes = (props) => {
  const {
    component: Component,
    auth: { isAuthenticated, user, loading },
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Loading>Fetching User Data...</Loading>
        ) : isAuthenticated && user.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/tournaments" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoutes);
