import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  messageBox: {
    padding: theme.spacing(1.5)
  },
  arrowIcon: {
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

      <Box className={classes.messageBox}>
        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.arrowIcon} /> All teams
          will be deleted.
        </Typography>

        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.arrowIcon} /> No money
          will be refunded to any team.
        </Typography>
      </Box>

      <Divider />

      <Typography color="primary" sx={{ marginTop: 1.5 }}>
        We suggest you to do this instead of deleting:
      </Typography>

      <Box className={classes.messageBox}>
        <Typography variant="body2" color="textSecondary">
          <ArrowForwardRoundedIcon className={classes.arrowIcon} /> Postponed
          the tournament by updating time or date.
        </Typography>
      </Box>
    </>
  );
};

export default DeleteModal;
