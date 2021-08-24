import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    alignItems: 'center',
    textAlign: 'center',
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('xs')]: {
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
    el.value = `Hello friend, You can join my team to play Battlegrounds Mobile India tournament and earn money. First browse the tournament on ${window.location.href} and then enter the teamcode: ${teamCode} to join my team to participate in the tournament.`;
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

  return (
    <>
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
                  >
                    <ShareRoundedIcon />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            )
          }}
        />
      </Box>
    </>
  );
};

export default Teamcode;
