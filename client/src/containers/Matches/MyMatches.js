import React, { lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';

import BackButton from '../../ui/BackButton/BackButton';
import SuspenseLoading from '../../ui/Loading/SuspenseLoading';

const OpenMatches = lazy(() =>
  import('./ComponentHelper/MyMatchesHelper/OpenMatches')
);
const CompletedMatches = lazy(() =>
  import('./ComponentHelper/MyMatchesHelper/CompletedMatches')
);

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

      <Box sx={{ marginBottom: 2 }}>
        <Container>
          <BackButton link="/tournaments" text="Go To Tournaments" />

          <Box className={classes.root}>
            <AppBar
              position="static"
              className={classes.appBar}
              elevation={0}
              sx={{ borderBottom: '1px solid rgb(224 224 224)' }}
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
