import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import makeStyles from '@mui/styles/makeStyles';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
  progressBar: {
    padding: theme.spacing(3),
    height: '120px',
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
            textColor: '#3f51b5',
            pathColor: '#3f51b5'
          })}
        />
      </Box>
    </>
  );
};

export default ParticipantCount;
