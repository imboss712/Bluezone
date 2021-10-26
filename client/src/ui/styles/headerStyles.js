import { makeStyles } from '@mui/styles';

const headerStyle = makeStyles((theme) => ({
  buttonRight: {
    marginRight: theme.spacing(2)
  },
  buttonLink: {
    textDecoration: 'none'
  },
  expandIcon: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(0.5)
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    backgroundColor: '#3f51b5'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default headerStyle;
