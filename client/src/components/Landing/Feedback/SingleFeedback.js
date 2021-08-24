import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.8, 1.75),
    maxWidth: 380
  },
  avatar: {
    backgroundColor: '#3f51b5'
  }
}));

const SingleFeedback = (props) => {
  const classes = useStyles();

  const {
    feedback: {
      name,
      address: { city, state },
      feedback
    }
  } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <Avatar aria-label="name" alt={name} className={classes.avatar}>
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
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
