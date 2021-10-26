import makeStyles from '@mui/styles/makeStyles';

const faqStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4)
  },
  accordian: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
    borderRadius: theme.spacing(1),
    backgroundColor: '#fafafa',
    '&:before': {
      display: 'none'
    }
  },
  summary: {
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2.5)
  },
  details: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  expandIcon: {
    fontSize: theme.spacing(3.75)
  },
  summaryText: {
    fontSize: theme.spacing(2.25),
    marginLeft: theme.spacing(1.5)
  },
  detailsText: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(1)
  }
}));

export default faqStyle;
