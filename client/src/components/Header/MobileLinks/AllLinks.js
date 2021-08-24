import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import VideoLabelOutlinedIcon from '@material-ui/icons/VideoLabelOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HotTubOutlinedIcon from '@material-ui/icons/HotTubOutlined';

const useStyles = makeStyles((theme) => ({
  btnLink: {
    textDecoration: 'none'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const AllLinks = () => {
  const classes = useStyles();

  return (
    <>
      <Link to="/tutorials" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <VideoLabelOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Tutorials" />
        </ListItem>
      </Link>

      <Link to="/interviews" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <RecentActorsOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Interviews" />
        </ListItem>
      </Link>

      <Link to="/blogs" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <DescriptionOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Blogs" />
        </ListItem>
      </Link>

      <Link to="/hot-moments" className={classes.btnLink}>
        <ListItem button>
          <ListItemIcon>
            <HotTubOutlinedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Hot Moments" />
        </ListItem>
      </Link>

      <Divider variant="middle" className={classes.divider} />
    </>
  );
};

export default AllLinks;
