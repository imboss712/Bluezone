import React, { lazy, Suspense, useState, memo } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SuspenseLoading from '../../../../components/Loading/SuspenseLoading';

const SmallScreen = lazy(() => import('./MatchActionsLink/SmallScreen'));
const BigScreen = lazy(() => import('./MatchActionsLink/BigScreen'));

const ChangeStatus = lazy(() => import('./MatchActionsHelper/ChangeStatus'));
const ShareMatch = lazy(() => import('./MatchActionsHelper/ShareMatch'));

const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const MatchActions = memo((props) => {
  const classes = useStyles();

  const {
    tournamentId,
    role,
    matchStatus,
    participantStatus,
    onDelete
  } = props;

  const isSmallScreen = useMediaQuery('(max-width:960px)');

  const [changeStatus, toggleChangeStatus] = useState(false);
  const [shareMatch, toggleShareMatch] = useState(false);

  const handleChangeStatus = () => {
    toggleChangeStatus((prevState) => !prevState);
  };

  const handleShareBlock = () => {
    toggleShareMatch((prevState) => !prevState);
  };

  return (
    <>
      <Box className={classes.actions}>
        {isSmallScreen ? (
          <Suspense>
            <SmallScreen
              role={role}
              tournamentId={tournamentId}
              onDelete={onDelete}
              handleChangeStatus={handleChangeStatus}
              handleShareBlock={handleShareBlock}
            />
          </Suspense>
        ) : (
          <Suspense>
            <BigScreen
              role={role}
              tournamentId={tournamentId}
              onDelete={onDelete}
              handleChangeStatus={handleChangeStatus}
              handleShareBlock={handleShareBlock}
            />
          </Suspense>
        )}
      </Box>

      {changeStatus && (
        <Suspense fallback={<SuspenseLoading />}>
          <ChangeStatus
            tournamentId={tournamentId}
            matchStatus={matchStatus}
            participantStatus={participantStatus}
          />
        </Suspense>
      )}

      {shareMatch && (
        <Suspense fallback={<SuspenseLoading />}>
          <ShareMatch />
        </Suspense>
      )}
    </>
  );
});

export default MatchActions;
