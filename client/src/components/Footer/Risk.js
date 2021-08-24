import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  risk: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    textAlign: 'center',
    justifyContent: 'center'
  }
}));

const Risk = () => {
  const classes = useStyles();

  return (
    <Box className={classes.risk}>
      <Container>
        <Typography variant="body2">
          This game involves an element of financial risk and may be addictive.
          Please play responsibly at your own risk.
        </Typography>
      </Container>
    </Box>
  );
};

export default Risk;
