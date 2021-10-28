import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import { Formik, Form } from 'formik';
import makeStyles from '@mui/styles/makeStyles';

import TeamResult from './ResultHelper/TeamResult/TeamResult';
import TeamForm from './ResultHelper/TeamResult/TeamForm';

import * as actions from '../../../../store/actions/index';
import Loading from '../../../../ui/Loading/Loading';
import SubmitButton from '../../../../ui/SubmitButton/SubmitButton';
const Error = lazy(() => import('../../../../ui/Error/Error'));

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2.25, 0),
    flexGrow: 1,
    maxWidth: '100%',
    flexBasis: '44%'
  }
}));

const Result = (props) => {
  const classes = useStyles();

  const {
    user,
    team: { loadingTeams, teams },
    matchStatus,
    onGetTeams,
    onPostResult,
    tournamentId
  } = props;

  useEffect(() => {
    onGetTeams(tournamentId);
  }, [onGetTeams, tournamentId]);

  let initialValues = {};

  if (!loadingTeams && teams.length > 0) {
    teams.forEach((team) => {
      initialValues[team._id.teamId] = team._id.position;
      team.players.forEach((player) => {
        initialValues[player.playerId] = player.kill;
      });
    });
  }

  return (
    <>
      {matchStatus !== 'Result' ? (
        user.role === 'admin' ? (
          loadingTeams ? (
            <Loading hideImage>Fetching Teams and data...</Loading>
          ) : teams.length > 0 ? (
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  onPostResult(tournamentId, values);
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting }) => {
                return (
                  <Form>
                    {teams.map((team, index) => (
                      <TeamForm
                        key={team._id.teamId}
                        team={team}
                        index={index}
                      />
                    ))}
                    <Box
                      className={classes.box}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <SubmitButton
                        createText="Post Result"
                        creatingText="Posting..."
                        isSubmitting={isSubmitting}
                        disabled={isSubmitting ? true : false}
                        onClick={submitForm}
                      />
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <Suspense>
              <Error
                hideImage
                status="204"
                statusText="No participants yet. Let some players join."
              />
            </Suspense>
          )
        ) : (
          <Suspense>
            <Error
              hideImage
              status="204"
              statusText="Result is not generated yet."
            />
          </Suspense>
        )
      ) : loadingTeams ? (
        <Loading hideImage>Fetching Result...</Loading>
      ) : teams.length > 0 ? (
        teams.map((team, index) => (
          <TeamResult key={team._id.teamId} team={team} index={index} />
        ))
      ) : (
        <Suspense>
          <Error hideImage status="204" statusText="Something went wrong." />
        </Suspense>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  team: state.team,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
  onGetTeams: (matchId) => dispatch(actions.getAllTeams(matchId)),
  onPostResult: (matchId, resultData) =>
    dispatch(actions.postResult(matchId, resultData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
