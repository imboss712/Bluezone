import React, { useState, lazy, Suspense } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';

import SuspenseLoading from '../../../ui/Loading/SuspenseLoading';

const Transactions = lazy(() => import('./Transactions/Transactions'));
const Payouts = lazy(() => import('./Payouts/Payouts'));

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
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider' }}
        className={classes.tabheader}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wallet tabs"
          centered
        >
          <Tab label="Transactions" {...a11yProps(0)} />
          <Tab label="Payouts" {...a11yProps(1)} />
        </Tabs>
      </Box>

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
