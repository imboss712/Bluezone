import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  contentBox: {
    padding: theme.spacing(0, 1)
  },
  actionBox: {
    padding: theme.spacing(2)
  },
  noActionBox: {
    padding: theme.spacing(3),
    textAlign: 'center'
  }
}));

const Modal = forwardRef((props, ref) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const {
    title,
    children,
    noAction,
    noActionText,
    confirmText,
    onConfirmClick
  } = props;

  useImperativeHandle(ref, () => {
    return {
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false)
    };
  });

  return ReactDOM.createPortal(
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent id="alert-dialog-description">
        <Box className={classes.contentBox}>{children}</Box>
      </DialogContent>

      {noAction ? (
        <Box className={classes.noActionBox}>
          <Typography color="secondary">{noActionText}</Typography>
        </Box>
      ) : (
        <DialogActions className={classes.actionBox}>
          <Button
            style={{ marginRight: '8px' }}
            onClick={() => setIsOpen(false)}
            color="primary"
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirmClick}
            color="primary"
            variant="contained"
            disableElevation
            autoFocus
          >
            {confirmText}
          </Button>
        </DialogActions>
      )}
    </Dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
