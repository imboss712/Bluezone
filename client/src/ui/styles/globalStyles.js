import makeStyles from '@mui/styles/makeStyles';

const globalStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto'
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.8, 3)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.6, 2)
    },
    borderRadius: theme.spacing(0.75),
    textAlign: 'center'
  },
  box: {
    margin: theme.spacing(3, 4),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2.8, 2.8)
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.6, 1.5)
    }
  },
  headingText: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary
  },
  headingIcon: {
    fontSize: theme.spacing(6),
    color: '#3f51b5'
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default globalStyles;
