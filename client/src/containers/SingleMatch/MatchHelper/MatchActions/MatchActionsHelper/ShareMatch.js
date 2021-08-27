import React, { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  shareBox: {
    margin: theme.spacing(1),
    display: 'block'
  },
  textArea: {
    width: '100%',
    display: 'block',
    resize: 'none'
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(1, 0)
  }
}));

const ShareMatch = () => {
  const classes = useStyles();

  const textAreaRef = useRef(null);

  const [copySuccess, setCopySuccess] = useState('Copy to Clipboard');

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied to Clipboard!');
    setTimeout(() => {
      setCopySuccess('Copy to Clipboard');
    }, 1000);
  };

  return (
    <Box className={classes.shareBox}>
      <textarea
        ref={textAreaRef}
        className={classes.textArea}
        name="sharematch"
        rows="4"
        readOnly
        value={`Hello friends, Join Battlegrounds Mobile India Tournament at ${window.location.href} and earn real money.`}
      />

      <Box className={classes.buttonBox}>
        <Button
          color="primary"
          variant={
            copySuccess === 'Copy to Clipboard' ? 'contained' : 'outlined'
          }
          onClick={copyToClipboard}
          disableElevation
        >
          {copySuccess}
        </Button>
      </Box>
    </Box>
  );
};

export default ShareMatch;
