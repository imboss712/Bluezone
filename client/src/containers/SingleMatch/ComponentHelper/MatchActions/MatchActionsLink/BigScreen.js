import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    textDecoration: 'none',
    margin: theme.spacing(1)
  }
}));

const BigScreen = (props) => {
  const classes = useStyles();

  const { tournamentId, role, onDelete, handleChangeStatus, handleShareBlock } =
    props;

  const editLink = `/edit-tournament/${tournamentId}`;

  return (
    <>
      {role === 'admin' ? (
        <>
          <Link to={editLink} className={classes.buttonLink}>
            <Button variant="outlined" startIcon={<EditRoundedIcon />}>
              Update Tournament
            </Button>
          </Link>

          <Button
            color="primary"
            variant="outlined"
            onClick={handleChangeStatus}
            sx={{ margin: 1 }}
            startIcon={<SettingsRoundedIcon />}
          >
            Change Status
          </Button>

          <Button
            color="secondary"
            variant="outlined"
            sx={{ margin: 1 }}
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
        sx={{ margin: 1 }}
        endIcon={<ShareRoundedIcon />}
      >
        Share Tournament
      </Button>
    </>
  );
};

export default BigScreen;
