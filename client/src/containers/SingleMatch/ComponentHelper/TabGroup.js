import React, { lazy, Suspense, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

import SuspenseLoading from '../../../ui/Loading/SuspenseLoading';

import Rules from './Rules/Rules';
const Prize = lazy(() => import('./Prize/Prize'));
const Teams = lazy(() => import('./Participants/Teams'));
const Result = lazy(() => import('./Result/Result'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabpanel: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.75, 1.5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.5, 0.75)
    },
    [theme.breakpoints.down(undefined)]: {
      padding: theme.spacing(2.5, 0.5)
    }
  },
  appBar: {
    backgroundColor: 'white',
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
      id={`single-tournament-tabpanel-${index}`}
      aria-labelledby={`single-tournament-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabpanel}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `single-tournament-tab-${index}`,
    'aria-controls': `single-tournament-tabpanel-${index}`
  };
};

const TabGroup = (props) => {
  const classes = useStyles();

  const { id, teamType, entryFees, matchStatus } = props;

  const isSmallScreen = useMediaQuery('(max-width:960px)');
  const isVerySmallScreen = useMediaQuery('(max-width:400px)');

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
        elevation={0}
        style={{ borderBottom: '1px solid rgb(224 224 224)' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="single tournament tabs"
          indicatorColor="primary"
          textColor="primary"
          variant={isVerySmallScreen ? 'scrollable' : 'standard'}
          scrollButtons="auto"
          centered={isSmallScreen && !isVerySmallScreen ? true : false}
        >
          <Tab label="Rules" {...a11yProps(0)} />
          <Tab label="Prize" {...a11yProps(1)} />
          <Tab label="Participants" {...a11yProps(2)} />
          <Tab label="Results" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
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
          <Teams tournamentId={id} />
        </Suspense>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Suspense fallback={<SuspenseLoading />}>
          <Result tournamentId={id} matchStatus={matchStatus} />
        </Suspense>
      </TabPanel>
    </Box>
  );
};

export default TabGroup;
