import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnLink: {
    textDecoration: 'none',
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const BigScreen = (props) => {
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
          <Link to={editLink} className={classes.btnLink}>
            <Button variant="outlined" startIcon={<EditRoundedIcon />}>
              Update Tournament
            </Button>
          </Link>

          <Button
            color="primary"
            variant="outlined"
            onClick={handleChangeStatus}
            className={classes.button}
            startIcon={<SettingsRoundedIcon />}
          >
            Change Status
          </Button>

          <Button
            color="secondary"
            variant="outlined"
            className={classes.button}
            onClick={onDelete}
            startIcon={<DeleteRoundedIcon />}
          >
            Delete Tournament
          </Button>
        </>
      ) : null}

      <Button
        color="primary"
        variant="contained"
        disableElevation
        onClick={handleShareBlock}
        className={classes.button}
        endIcon={<ShareRoundedIcon />}
      >
        Share Tournament
      </Button>
    </>
  );
};

export default BigScreen;
