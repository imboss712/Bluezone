import React from 'react';
import { connect } from 'react-redux';
import { formatISO, format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

import * as actions from '../../store/actions/index';

import { entryItems, prizePoolItems } from './FormHelper/Items';
import Match from './Match';

const CreateMatch = (props) => {
  const { history, onCreate } = props;

  const initialValues = {
    title: '',
    matchDate: null,
    matchTime: null,
    teamType: 'Squad',
    perspective: 'TPP',
    server: 'India',
    map: 'Erangel',
    entryFees: entryItems[1].value,
    prizePool:
      entryItems[1].value *
      100 *
      prizePoolItems.find((pp) => pp.type === 'Squad').value
  };

  const handleSubmit = (values) => {
    onCreate(
      {
        ...values,
        matchDate: formatISO(new Date(values.matchDate), {
          representation: 'date'
        }),
        matchTime: format(new Date(values.matchTime), 'HH:mm')
      },
      history
    );
  };

  return (
    <>
      <Helmet>
        <title>Host a Tournament | Bluezone</title>
        <link rel="canonical" href="https://www.bluezone.fun/host-tournament" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Host a Tournament | Bluezone" />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/host-tournament"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Host a Tournament | Bluezone" />
      </Helmet>

      <Match initialValues={initialValues} handleSubmit={handleSubmit} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreate: (matchData, history) =>
    dispatch(actions.createMatch(matchData, history))
});

export default connect(null, mapDispatchToProps)(CreateMatch);
