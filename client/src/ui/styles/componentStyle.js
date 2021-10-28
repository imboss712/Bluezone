import makeStyles from '@mui/styles/makeStyles';

const componentStyle = makeStyles((theme) => ({
  heading: {
    fontSize: theme.spacing(4),
    lineHeight: 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(1.5, 0)
  },
  subHeading: {
    marginTop: theme.spacing(1.75)
  },
  text: {
    marginTop: theme.spacing(1.5)
  },
  linkColor: {
    color: '#1976D2'
  }
}));

export default componentStyle;
