import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import FAQlists from './FAQlists';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  typography: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3.6)
    }
  },
  accordian: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
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
  summaryTypo: {
    fontSize: theme.spacing(2.25),
    marginLeft: theme.spacing(1.5)
  },
  detailsTypo: {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  moreButton: {
    margin: '24px auto',
    textAlign: 'center'
  },
  linkBtn: {
    textDecoration: 'none'
  }
}));

const FAQs = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          className={classes.typography}
          title="Bluezone FAQs"
        >
          FAQs
        </Typography>

        <Box style={{ margin: '36px 0' }}>
          {FAQlists.map((faq) => {
            return (
              <Accordion
                className={classes.accordian}
                expanded={expanded === faq.panel}
                onChange={handleChange(faq.panel)}
                key={faq.panel}
                elevation={0}
              >
                <AccordionSummary
                  className={classes.summary}
                  expandIcon={
                    <ExpandMoreIcon
                      className={classes.expandIcon}
                      color="primary"
                    />
                  }
                  aria-controls={faq.panel + 'a-content'}
                  id={faq.panel + 'a-header'}
                >
                  <Typography className={classes.summaryTypo} color="primary">
                    {faq.summary}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Typography className={classes.detailsTypo}>
                    {faq.detail}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Link to="/help/faqs" className={classes.linkBtn}>
          <Box className={classes.moreButton}>
            <Button variant="outlined" color="primary" aria-label="More FAQs">
              More FAQs
            </Button>
          </Box>
        </Link>

        <Divider />
      </Container>
    </Box>
  );
};

export default FAQs;
