import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../../../store/actions/index';

import TeamResult from './ResultHelper/TeamResult/TeamResult';
import TeamForm from './ResultHelper/TeamResult/TeamForm';

import Loading from '../../../../components/Loading/Loading';
import Error from '../../../../components/Error/Error';

const useStyles = makeStyles((theme) => ({
  box: {
    margin: theme.spacing(2.25, 0),
    flexGrow: 1,
    maxWidth: '100%',
    flexBasis: '44%'
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
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
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting ? true : false}
                        onClick={submitForm}
                        disableElevation
                      >
                        {isSubmitting ? (
                          <>
                            Posting...{' '}
                            <CircularProgress
                              size={16}
                              className={classes.icon}
                            />
                          </>
                        ) : (
                          'Post Result'
                        )}
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <Error
              hideImage
              status="204"
              statusText="No participants yet. Let some players join."
            />
          )
        ) : (
          <Error
            hideImage
            status="204"
            statusText="Result is not generated yet."
          />
        )
      ) : loadingTeams ? (
        <Loading hideImage>Fetching Result...</Loading>
      ) : teams.length > 0 ? (
        teams.map((team, index) => (
          <TeamResult key={team._id.teamId} team={team} index={index} />
        ))
      ) : (
        <Error hideImage status="204" statusText="Something went wrong." />
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
