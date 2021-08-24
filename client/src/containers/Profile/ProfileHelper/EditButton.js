import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnGrp: {
    textAlign: 'center',
    padding: theme.spacing(1.25, 0, 0, 0)
  },
  btnLink: {
    textDecoration: 'none',
    display: 'inline-block',
    margin: theme.spacing(1)
  }
}));

const EditButton = () => {
  const classes = useStyles();

  return (
    <Box className={classes.btnGrp}>
      <Link to="/edit-account" className={classes.btnLink}>
        <Button variant="outlined">Edit Account</Button>
      </Link>
      <Link to="/edit-dashboard" className={classes.btnLink}>
        <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
      </Link>
    </Box>
  );
};

export default EditButton;
