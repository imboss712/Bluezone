import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.8, 1.75),
    maxWidth: 380
  }
}));

const SingleFeedback = (props) => {
  const classes = useStyles();

  const {
    feedback: {
      name,
      image,
      address: { city, state },
      feedback
    }
  } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={<Avatar aria-label="avatar" alt={name} src={image} />}
        title={name}
        subheader={`${city}, ${state}`}
      />

      <CardContent>
        <Typography color="textSecondary">{feedback}</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleFeedback;
