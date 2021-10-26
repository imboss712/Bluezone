import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import InputAdornment from '@mui/material/InputAdornment';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  box: {
    alignItems: 'center',
    textAlign: 'center',
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  }
}));

const Teamcode = (props) => {
  const classes = useStyles();

  const { teamCode } = props;

  const [copySuccess, setCopySuccess] = useState(false);

  const copyTeamcode = () => {
    const el = document.createElement('textarea');
    el.value = `Hello friend, Join my team to play Battlegrounds Mobile India tournament. Visit this link ${window.location.href} and enter the teamcode: ${teamCode} to participate.`;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1250);
  };

  return <>
    <Box className={classes.box}>
      {copySuccess && (
        <Typography style={{ color: 'green', margin: '0 0 12px 0' }}>
          Copied to Clipboard!
        </Typography>
      )}

      <TextField
        variant="outlined"
        name="teamCode"
        type="text"
        label="Teamcode"
        value={teamCode}
        readOnly
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip
                title="Share TeamCode"
                enterDelay={500}
                TransitionComponent={Zoom}
                placement="top"
                arrow
              >
                <IconButton
                  aria-label="share-teamcode"
                  color="primary"
                  edge="end"
                  onClick={copyTeamcode}
                  style={{ marginRight: '0' }}
                  size="large">
                  <ShareRoundedIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )
        }}
      />
    </Box>
  </>;
};

export default Teamcode;
