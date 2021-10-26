import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  warning: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    textAlign: 'center'
  }
}));

const Warning = () => {
  const classes = useStyles();

  return (
    <Box className={classes.warning}>
      <Container>
        <Typography variant="body2">
          This game involves an element of financial risk and may be addictive.
          Please play responsibly at your own risk.
        </Typography>
      </Container>
    </Box>
  );
};

export default Warning;
