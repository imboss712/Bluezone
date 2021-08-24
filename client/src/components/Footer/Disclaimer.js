import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paraTitle: {
    color: '#ffffff'
  },
  para: {
    color: '#ffffff',
    opacity: 0.75,
    lineHeight: 1.5,
    maxWidth: 1000,
    margin: '0 auto'
  },
  disclaimer: {
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    textAlign: 'center'
  }
}));

const Disclaimer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.disclaimer}>
      <Typography className={classes.paraTitle} style={{ marginBottom: '8px' }}>
        Disclaimer
      </Typography>
      <Typography variant="body2" className={classes.para}>
        bluezone does not offer its services in Assam, Odisha, Sikkim, Nagaland,
        Telangana, Andhra Pradesh and Tamil Nadu as these states prohibit Skill
        Gaming for money as per respective Gaming Acts of the States. The game
        is applicable for people above 18 only.
      </Typography>
    </Box>
  );
};

export default Disclaimer;
