import React, { lazy, Suspense, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';

import SuspenseLoading from '../../../ui/Loading/SuspenseLoading';

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
      id={`wallet-tabpanel-${index}`}
      aria-labelledby={`wallet-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.tabpanel}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `wallet-tab-${index}`,
    'aria-controls': `wallet-tabpanel-${index}`
  };
};

const WalletHistory = () => {
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
        sx={{
          borderBottom: 1,
          borderColor: '#e0e0e0'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wallet transactions"
          centered
        >
          <Tab label="Transactions" {...a11yProps(0)} />
          <Tab label="Payouts" {...a11yProps(1)} />
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

export default WalletHistory;
