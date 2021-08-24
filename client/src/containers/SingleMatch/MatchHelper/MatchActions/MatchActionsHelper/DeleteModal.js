import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  msgBox: {
    padding: theme.spacing(1.5)
  },
  bullet: {
    fontSize: theme.spacing(1.75),
    color: 'rgba(0, 0, 0, 0.6)',
    verticalAlign: 'middle'
  }
}));

const DeleteModal = () => {
  const classes = useStyles();

  return (
    <>
      <Typography color="secondary">
        Do you really want to delete this tournament?
      </Typography>

      <Box className={classes.msgBox}>
        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.bullet} /> All teams will
          be deleted.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.bullet} /> No money will
          be refunded to any team.
        </Typography>
      </Box>

      <Divider />

      <Typography color="primary" style={{ marginTop: '12px' }}>
        We suggest you to do this instead of deleting:
      </Typography>

      <Box className={classes.msgBox}>
        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.bullet} /> Postponed the
          tournament by updating time or date.
        </Typography>
      </Box>
    </>
  );
};

export default DeleteModal;
