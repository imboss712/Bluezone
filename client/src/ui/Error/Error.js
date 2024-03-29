import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import nocontent from '../../assets/no_data.svg';
import error from '../../assets/warning.svg';
import unauth from '../../assets/unauthorised.svg';
import notfound from '../../assets/not_found.svg';
import servererror from '../../assets/server_error.svg';

const useStyles = makeStyles((theme) => ({
  errorBox: {
    textAlign: 'center',
    margin: 'auto'
  },
  paper: {
    padding: theme.spacing(5)
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
    [theme.breakpoints.down(undefined)]: {
      width: 200,
      height: 200
    }
  },
  imageUnauth: {
    width: 270,
    height: 270,
    [theme.breakpoints.down('md')]: {
      width: 235,
      height: 235
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 200
    },
    [theme.breakpoints.down(undefined)]: {
      width: 175,
      height: 175
    }
  }
}));

const Error = (props) => {
  const classes = useStyles();

  const { status, statusText, hideImage, hideButton } = props;

  const refreshPage = () => {
    window.location.reload();
  };

  let errorImage;

  switch (parseInt(status)) {
    case 204:
      errorImage = (
        <img
          src={nocontent}
          alt="Error"
          style={{ marginBottom: '16px' }}
          className={classes.imageUnauth}
        />
      );
      break;

    case 400:
      errorImage = <img src={error} alt="Error" className={classes.image} />;
      break;

    case 401:
      errorImage = (
        <img
          src={unauth}
          alt="Error"
          style={{ marginBottom: '20px' }}
          className={classes.imageUnauth}
        />
      );
      break;

    case 404:
      errorImage = <img src={notfound} alt="Error" className={classes.image} />;
      break;

    case 500:
      errorImage = (
        <img src={servererror} alt="Error" className={classes.image} />
      );
      break;

    default:
      errorImage = <img src={error} alt="Error" className={classes.image} />;
      break;
  }

  return (
    <Box className={classes.errorBox}>
      <Paper className={classes.paper} elevation={0}>
        {hideImage || hideImage === true ? null : errorImage}

        <Typography color="secondary" variant="h6">
          {parseInt(status) === 204 || parseInt(status) === 400
            ? null
            : `${status} - `}
          {statusText}
        </Typography>

        {(parseInt(status) === 400 || parseInt(status) === 500) &&
        !hideButton ? (
          <Button
            variant="outlined"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={refreshPage}
          >
            Refresh
          </Button>
        ) : null}
      </Paper>
    </Box>
  );
};

export default Error;
