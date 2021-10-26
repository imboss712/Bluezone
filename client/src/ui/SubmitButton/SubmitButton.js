import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  loadingIcon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

const SubmitButton = (props) => {
  const classes = useStyles();

  const {
    variant = 'contained',
    createText,
    creatingText,
    updateText = '',
    updatingText = '',
    isSubmitting,
    edit = false,
    disabled,
    onClick
  } = props;

  return (
    <Button
      size="large"
      variant={variant}
      color="primary"
      aria-label="Submit"
      disabled={disabled}
      onClick={onClick}
      disableElevation
    >
      {isSubmitting ? (
        <>
          {edit ? updatingText : creatingText}
          <CircularProgress size={16} className={classes.loadingIcon} />
        </>
      ) : edit ? (
        updateText
      ) : (
        createText
      )}
    </Button>
  );
};

export default SubmitButton;
