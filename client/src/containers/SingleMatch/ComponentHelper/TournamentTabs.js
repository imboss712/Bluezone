import React, { useState, lazy, Suspense } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

import SuspenseLoading from '../../../ui/Loading/SuspenseLoading';

import Rules from './Rules/Rules';
const Prize = lazy(() => import('./Prize/Prize'));
const Teams = lazy(() => import('./Participants/Teams'));
const Result = lazy(() => import('./Result/Result'));

const useStyles = makeStyles((theme) => ({
  tabpanel: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.7, 1.5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.4, 0.7)
    }
  },
  tabheader: {
    backgroundColor: '#FFFFFF',
    marginTop: theme.spacing(1),
    position: 'sticky',
    top: 0,
    bottom: 8,
    zIndex: 5
  }
}));

const TabPanel = (props) => {
  const classes = useStyles();

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tournament-tabpanel-${index}`}
      aria-labelledby={`tournament-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabpanel}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `tournament-tab-${index}`,
    'aria-controls': `tournament-tabpanel-${index}`
  };
};

const TournamentTabs = (props) => {
  const classes = useStyles();

  const { tournamentId, teamType, entryFees, matchStatus } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isVerySmallScreen = useMediaQuery('(max-width:450px)');

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider' }}
        className={classes.tabheader}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tournament tabs"
          variant="fullWidth"
        >
          <Tab
            icon={<RuleRoundedIcon />}
            label={isVerySmallScreen ? '' : 'Rules'}
            {...a11yProps(0)}
          />

          <Tab
            icon={<MoneyRoundedIcon />}
            label={isVerySmallScreen ? '' : 'Prize'}
            {...a11yProps(1)}
          />

          <Tab
            icon={<GroupsRoundedIcon />}
            label={isVerySmallScreen ? '' : 'Participants'}
            {...a11yProps(2)}
          />

          <Tab
            icon={<AssessmentRoundedIcon />}
            label={isVerySmallScreen ? '' : 'Result'}
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Rules />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Suspense fallback={<SuspenseLoading />}>
          <Prize teamType={teamType} entry={entryFees} />
        </Suspense>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Suspense fallback={<SuspenseLoading />}>
          <Teams tournamentId={tournamentId} />
        </Suspense>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Suspense fallback={<SuspenseLoading />}>
          <Result tournamentId={tournamentId} matchStatus={matchStatus} />
        </Suspense>
      </TabPanel>
    </Box>
  );
};

export default TournamentTabs;
