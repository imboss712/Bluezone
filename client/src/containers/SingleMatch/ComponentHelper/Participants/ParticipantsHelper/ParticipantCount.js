import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import makeStyles from '@mui/styles/makeStyles';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
  progressBar: {
    padding: theme.spacing(3),
    height: theme.spacing(15),
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }
}));

const ParticipantCount = (props) => {
  const classes = useStyles();

  const { count } = props;

  return (
    <>
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Participants
      </Typography>

      <Box className={classes.progressBar}>
        <CircularProgressbar
          value={count}
          minValue={0}
          maxValue={100}
          text={`${count}/100`}
          strokeWidth={7}
          styles={buildStyles({
            textColor: '#1976D2',
            pathColor: '#1976D2'
          })}
        />
      </Box>
    </>
  );
};

export default ParticipantCount;
