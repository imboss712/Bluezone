import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { useFormikContext } from 'formik';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  chipBox: {
    margin: theme.spacing(1, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1, 2.8)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 1.5)
    }
  },
  chipArray: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
}));

const moneyChipItems = [
  { key: 1, label: '+ 25', value: 25 },
  { key: 2, label: '+ 50', value: 50 },
  { key: 3, label: '+ 100', value: 100 },
  { key: 4, label: '+ 200', value: 200 },
  { key: 5, label: '+ 500', value: 500 }
];

const MoneyIncrementChip = () => {
  const classes = useStyles();

  const { values, handleChange } = useFormikContext();

  const handleAdd = (money) => {
    const event = {
      target: {
        name: 'amount',
        value: (values.amount === '' ? 0 : values.amount) + money
      }
    };

    handleChange(event);

    values.amount += money;
  };

  const handleClear = () => {
    const event = {
      target: {
        name: 'amount',
        value: 0
      }
    };

    handleChange(event);

    values.amount = 0;
  };

  return (
    <Box className={classes.chipBox}>
      <Paper component="ul" elevation={0} className={classes.chipArray}>
        {moneyChipItems.map((moneyChip) => {
          return (
            <li key={moneyChip.key}>
              <Chip
                color="primary"
                label={moneyChip.label}
                onClick={() => handleAdd(moneyChip.value)}
                sx={{ margin: 0.5 }}
                variant="outlined"
              />
            </li>
          );
        })}

        <Chip
          color="error"
          label="Clear"
          icon={<ClearRoundedIcon sx={{ fontSize: 15 }} />}
          onClick={() => handleClear()}
          sx={{ margin: 0.5, marginLeft: 'auto' }}
          variant="outlined"
        />
      </Paper>
    </Box>
  );
};

export default MoneyIncrementChip;
