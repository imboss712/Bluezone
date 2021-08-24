import React, { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import BackButton from '../../components/BackButton/BackButton';
import SuspenseLoading from '../../components/Loading/SuspenseLoading';

const OpenMatches = lazy(() => import('./MyMatchesHelper/OpenMatches'));
const CompletedMatches = lazy(() =>
  import('./MyMatchesHelper/CompletedMatches')
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabpanel: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.75, 1.5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.5, 0.75)
    },
    [theme.breakpoints.down(375)]: {
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

const MyMatches = () => {
  const classes = useStyles();

  const isSmallScreen = useMediaQuery('(max-width:960px)');

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>My Tournaments | Bluezone</title>
        <link rel="canonical" href="https://www.bluezone.fun/my-tournaments" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="My Tournaments | Bluezone" />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/my-tournaments"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="My Tournaments | Bluezone" />
      </Helmet>

      <Box style={{ marginBottom: '16px' }}>
        <Container>
          <BackButton link="/tournaments" text="Go To Tournaments" />

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
                aria-label="my tournament tabs"
                indicatorColor="primary"
                textColor="primary"
                centered={isSmallScreen ? true : false}
              >
                <Tab label="Open &amp; Live" {...a11yProps(0)} />
                <Tab label="Completed" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Suspense fallback={<SuspenseLoading />}>
                <OpenMatches />
              </Suspense>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Suspense fallback={<SuspenseLoading />}>
                <CompletedMatches />
              </Suspense>
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MyMatches;
