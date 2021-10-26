import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    backgroundColor: '#4A3F44',
    padding: theme.spacing(22.5, 2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(20, 1.9)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(17.5, 1.8)
    },
    textAlign: 'center'
  },
  heading: {
    color: '#FFFFFF',
    fontSize: theme.spacing(5.5),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(5.15)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(4.8)
    },
    lineHeight: 1.3,
    fontWeight: 'bold'
  },
  joinButton: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2.85)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2.7)
    }
  },
  buttonLink: {
    textDecoration: 'none'
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Typography variant="h1" className={classes.heading}>
          Play BGMI Tournaments
        </Typography>

        <Typography variant="h1" className={classes.heading}>
          And Earn Real Money
        </Typography>

        <Link to="/register" className={classes.buttonLink}>
          <Button
            className={classes.joinButton}
            size="large"
            variant="contained"
            color="primary"
            aria-label="Play Tournaments"
            disableElevation
          >
            Play Now
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Banner;
