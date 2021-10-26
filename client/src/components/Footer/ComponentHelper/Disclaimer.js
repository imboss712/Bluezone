import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  disclaimer: {
    paddingTop: theme.spacing(3.5),
    paddingBottom: theme.spacing(3.5),
    textAlign: 'center'
  },
  title: {
    color: '#ffffff'
  },
  text: {
    color: '#ffffff',
    opacity: 0.75,
    lineHeight: 1.5,
    maxWidth: 1000,
    margin: '0 auto'
  }
}));

const Disclaimer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.disclaimer}>
      <Typography className={classes.title} sx={{ marginBottom: 1 }}>
        Disclaimer
      </Typography>

      <Typography variant="body2" className={classes.text}>
        bluezone does not offer its services in Assam, Odisha, Sikkim, Nagaland,
        Telangana, Andhra Pradesh and Tamil Nadu as these states prohibit Skill
        Gaming for money as per respective Gaming Acts of the States. The game
        is applicable for people above 18 only.
      </Typography>
    </Box>
  );
};

export default Disclaimer;
