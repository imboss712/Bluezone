import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    color: '#FFFFFF',
    opacity: 0.75
  },
  location: {
    backgroundColor: '#37474f',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    textAlign: 'center',
    justifyContent: 'center'
  },
  heart: {
    color: 'red',
    verticalAlign: 'text-bottom'
  }
}));

const Location = () => {
  const classes = useStyles();

  return (
    <Box className={classes.location}>
      <Container>
        <Typography className={classes.paragraph}>
          Made with <FavoriteIcon className={classes.heart} /> in India
        </Typography>
      </Container>
    </Box>
  );
};

export default Location;
