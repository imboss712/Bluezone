import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    textDecoration: 'none',
    margin: theme.spacing(0.5)
  }
}));

const SmallScreen = (props) => {
  const classes = useStyles();

  const { tournamentId, role, onDelete, handleChangeStatus, handleShareBlock } =
    props;

  const editLink = `/edit-tournament/${tournamentId}`;

  return (
    <>
      {role === 'admin' ? (
        <>
          <Link to={editLink} className={classes.iconButton}>
            <IconButton
              color="primary"
              aria-label="update tournament"
              size="large"
            >
              <EditRoundedIcon />
            </IconButton>
          </Link>

          <IconButton
            color="primary"
            aria-label="change status"
            onClick={handleChangeStatus}
            className={classes.iconButton}
            size="large"
          >
            <SettingsRoundedIcon />
          </IconButton>

          <IconButton
            color="secondary"
            aria-label="delete tournament"
            onClick={onDelete}
            className={classes.iconButton}
            size="large"
          >
            <DeleteRoundedIcon />
          </IconButton>
        </>
      ) : null}

      <IconButton
        color="primary"
        aria-label="share tournament"
        onClick={handleShareBlock}
        className={classes.iconButton}
        size="large"
      >
        <ShareRoundedIcon />
      </IconButton>
    </>
  );
};

export default SmallScreen;
