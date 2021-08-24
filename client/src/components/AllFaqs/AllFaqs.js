import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

import AllFaqsLists from './AllFaqLists';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4)
  },
  heading: {
    fontSize: theme.spacing(4),
    lineHeight: 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(1.5, 0)
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
  }
}));

const AllFaqs = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>FAQs | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."
        />
        <link rel="canonical" href="https://www.bluezone.fun/help/faq" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="FAQs | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."
        />
        <meta property="og:url" content="https://www.bluezone.fun/help/faq" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."
        />
        <meta
          name="twitter:title"
          content="FAQs | Online BGMI Tournament - Bluezone"
        />
      </Helmet>
      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={classes.heading}>
            FAQs
          </Typography>

          <Box style={{ margin: '36px 0' }}>
            {AllFaqsLists.map((faqSection) => {
              return (
                <Box style={{ margin: '4px 0 16px 0' }} key={faqSection.id}>
                  <Typography variant="h6">
                    <b>{faqSection.title}:</b>
                  </Typography>
                  {faqSection.faqs.map((faq) => {
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
                          <Typography
                            className={classes.summaryTypo}
                            color="primary"
                          >
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
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AllFaqs;
