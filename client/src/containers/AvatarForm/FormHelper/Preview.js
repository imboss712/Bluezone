import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  preview: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: '8px auto 24px auto'
  }
}));

const Preview = (props) => {
  const classes = useStyles();

  const { preview, values, errors } = props;

  return (
    <>
      {preview !== null ? (
        <Avatar
          alt={values.avatar ? values.avatar.name : 'avatar'}
          src={preview}
          variant="rounded"
          className={classes.preview}
        />
      ) : preview === null && errors.avatar ? (
        <Typography variant="body2" color="secondary">
          Can't show preview
        </Typography>
      ) : null}
    </>
  );
};

export default Preview;
