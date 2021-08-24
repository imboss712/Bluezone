import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { makeStyles } from '@material-ui/core/styles';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles((theme) => ({
  teamText: {
    color: theme.palette.text.secondary
  },
  progressbar: {
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
      <Typography variant="h6" className={classes.teamText}>
        Participants
      </Typography>
      <Box className={classes.progressbar}>
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
