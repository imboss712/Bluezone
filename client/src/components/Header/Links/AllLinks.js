import React, { useState } from 'react';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonRight: {
    marginRight: theme.spacing(2)
  },
  btnLink: {
    textDecoration: 'none'
  },
  expandIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.5)
  }
}));

const AllLinks = (props) => {
  const classes = useStyles();

  const { expandable } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {expandable ? (
        <>
          <NavLink
            to="/tutorials"
            className={clsx(classes.btnLink, classes.buttonRight)}
          >
            <Button color="primary">Tutorials</Button>
          </NavLink>

          <NavLink
            to="/interviews"
            className={clsx(classes.btnLink, classes.buttonRight)}
          >
            <Button color="primary">Interviews</Button>
          </NavLink>

          <NavLink
            to="/blogs"
            className={clsx(classes.btnLink, classes.buttonRight)}
          >
            <Button color="primary">Blogs</Button>
          </NavLink>

          <NavLink
            to="/hot-moments"
            className={clsx(classes.btnLink, classes.buttonRight)}
          >
            <Button color="primary">Hot Moments</Button>
          </NavLink>
        </>
      ) : (
        <>
          <Button
            color="primary"
            aria-controls="all-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.buttonRight}
          >
            More <UnfoldMoreRoundedIcon className={classes.expandIcon} />
          </Button>

          <Menu
            id="all-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/tutorials" className={classes.btnLink}>
              <MenuItem onClick={handleClose}>Tutorials</MenuItem>
            </Link>

            <Link to="/interviews" className={classes.btnLink}>
              <MenuItem onClick={handleClose}>Interviews</MenuItem>
            </Link>

            <Link to="/blogs" className={classes.btnLink}>
              <MenuItem onClick={handleClose}>Blogs</MenuItem>
            </Link>

            <Link to="/hot-moments" className={classes.btnLink}>
              <MenuItem onClick={handleClose}>Hot Moments</MenuItem>
            </Link>
          </Menu>
        </>
      )}
    </>
  );
};

export default AllLinks;
