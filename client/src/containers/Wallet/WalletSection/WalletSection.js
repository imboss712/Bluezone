import React, { lazy, Suspense, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import SuspenseLoading from '../../../components/Loading/SuspenseLoading';

const Transactions = lazy(() => import('./Transactions/Transactions'));
const Payouts = lazy(() => import('./Payouts/Payouts'));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabpanel: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.9, 2.5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.9, 2)
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabpanel}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const WalletSection = () => {
  const classes = useStyles();

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
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Transactions" {...a11yProps(0)} />
          <Tab label="My Payout Links" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Suspense fallback={<SuspenseLoading />}>
          <Transactions />
        </Suspense>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Suspense fallback={<SuspenseLoading />}>
          <Payouts />
        </Suspense>
      </TabPanel>
    </Box>
  );
};

export default WalletSection;
