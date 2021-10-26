import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import makeStyles from '@mui/styles/makeStyles';

import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import notfound from '../../assets/error-404-colour.svg';

const useStyles = makeStyles((theme) => ({
  errorBox: {
    textAlign: 'center',
    width: '100%'
  },
  paper: {
    padding: theme.spacing(5)
  },
  heading: {
    marginBottom: theme.spacing(7),
    wordSpacing: theme.spacing(0.4)
  },
  subHeading: {
    marginTop: theme.spacing(8)
  },
  buttonLink: {
    textDecoration: 'none'
  },
  arrowIcon: {
    fontSize: theme.spacing(2.2),
    marginRight: theme.spacing(1)
  },
  image: {
    width: 300,
    height: 300,
    [theme.breakpoints.down('md')]: {
      width: 275,
      height: 275
    },
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 250
    },
    [theme.breakpoints.down('375')]: {
      width: 200,
      height: 200
    }
  }
}));

const WrongRoute = () => {
  const classes = useStyles();

  return (
    <>
      <HelmetComponent
        title="Page Not Found | Online BGMI Tournament - Bluezone"
        description="Sorry, Page not found what you are looking for. Please return to the home or tournament page."
        indexBehaviour="index, follow"
      />

      <Box className={classes.errorBox}>
        <Paper className={classes.paper} elevation={0}>
          <Typography color="primary" variant="h4" className={classes.heading}>
            SORRY, PAGE NOT FOUND!
          </Typography>

          <img src={notfound} alt="Error" className={classes.image} />

          <Typography
            color="secondary"
            variant="h6"
            className={classes.subHeading}
          >
            We can't find the page :(
          </Typography>

          <Link to="/tournaments" className={classes.buttonLink}>
            <Button variant="outlined" color="primary" sx={{ marginTop: 3.25 }}>
              <ArrowBackRoundedIcon className={classes.arrowIcon} /> Back To
              Tournaments
            </Button>
          </Link>
        </Paper>
      </Box>
    </>
  );
};

export default WrongRoute;
