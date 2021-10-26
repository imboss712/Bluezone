import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  location: {
    backgroundColor: '#37474f',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    textAlign: 'center'
  },
  text: {
    color: '#FFFFFF',
    opacity: 0.75
  },
  heartIcon: {
    color: 'red',
    verticalAlign: 'text-bottom'
  }
}));

const Location = () => {
  const classes = useStyles();

  return (
    <Box className={classes.location}>
      <Container>
        <Typography className={classes.text}>
          Made with <FavoriteIcon className={classes.heartIcon} /> in India
        </Typography>
      </Container>
    </Box>
  );
};

export default Location;
