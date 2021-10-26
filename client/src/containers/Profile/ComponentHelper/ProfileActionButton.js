import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    textAlign: 'center',
    padding: theme.spacing(1.25, 0, 0, 0)
  },
  buttonLink: {
    textDecoration: 'none',
    display: 'inline-block',
    margin: theme.spacing(1)
  }
}));

const ProfileActionButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.buttonBox}>
      <Link to="/edit-account" className={classes.buttonLink}>
        <Button variant="outlined" color="secondary">Edit Account</Button>
      </Link>

      <Link to="/edit-dashboard" className={classes.buttonLink}>
        <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
      </Link>
    </Box>
  );
};

export default ProfileActionButton;
