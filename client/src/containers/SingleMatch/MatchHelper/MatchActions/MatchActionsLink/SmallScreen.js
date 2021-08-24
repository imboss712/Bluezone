import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    textDecoration: 'none',
    margin: theme.spacing(0.5)
  }
}));

const SmallScreen = (props) => {
  const classes = useStyles();

  const {
    tournamentId,
    role,
    onDelete,
    handleChangeStatus,
    handleShareBlock
  } = props;

  const editLink = `/edit-tournament/${tournamentId}`;

  return (
    <>
      {role === 'admin' ? (
        <>
          <Link to={editLink} className={classes.iconButton}>
            <IconButton color="primary" aria-label="update tournament">
              <EditRoundedIcon />
            </IconButton>
          </Link>

          <IconButton
            color="primary"
            aria-label="change status"
            onClick={handleChangeStatus}
            className={classes.iconButton}
          >
            <SettingsRoundedIcon />
          </IconButton>

          <IconButton
            color="secondary"
            aria-label="delete tournament"
            onClick={onDelete}
            className={classes.iconButton}
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
      >
        <ShareRoundedIcon />
      </IconButton>
    </>
  );
};

export default SmallScreen;
