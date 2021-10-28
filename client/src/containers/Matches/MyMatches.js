import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
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
      id={`matches-tabpanel-${index}`}
      aria-labelledby={`matches-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabpanel}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `matches-tab-${index}`,
    'aria-controls': `matches-tabpanel-${index}`
  };
};

const MyMatches = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery('(max-width:960px)');

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

          <Box sx={{ width: '100%' }}>
            <Box
              sx={{ borderBottom: 1, borderColor: 'divider' }}
              className={classes.tabheader}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="my matches tabs"
                centered={isSmallScreen ? true : false}
              >
                <Tab label="Open &amp; Live" {...a11yProps(0)} />
                <Tab label="Completed" {...a11yProps(1)} />
              </Tabs>
            </Box>

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
