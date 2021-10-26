import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import makeStyles from '@mui/styles/makeStyles';

import homeFaqsList from '../../../datas/homeFaqsList';
import faqStyle from '../../../ui/styles/faqStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4.75)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4.5)
    }
  },
  heading: {
    color: '#282828',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(3.8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(3.6)
    }
  },
  moreButton: {
    margin: '24px auto',
    textAlign: 'center'
  },
  linkButton: {
    textDecoration: 'none'
  }
}));

const FAQs = () => {
  const classes = useStyles();
  const sharedClasses = faqStyle();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          className={classes.heading}
          title="Bluezone FAQs"
        >
          FAQs
        </Typography>

        <Box
          sx={{
            marginTop: 4.5,
            marginBottom: 4.5,
            marginLeft: 0,
            marginRight: 0
          }}
        >
          {homeFaqsList.map((faq) => {
            return (
              <Accordion
                className={sharedClasses.accordian}
                expanded={expanded === faq.panel}
                onChange={handleChange(faq.panel)}
                key={faq.panel}
                elevation={0}
              >
                <AccordionSummary
                  className={sharedClasses.summary}
                  expandIcon={
                    <ExpandMoreIcon
                      className={sharedClasses.expandIcon}
                      color="primary"
                    />
                  }
                  aria-controls={faq.panel + 'a-content'}
                  id={faq.panel + 'a-header'}
                >
                  <Typography
                    className={sharedClasses.summaryText}
                    color="primary"
                  >
                    {faq.summary}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className={sharedClasses.details}>
                  <Typography className={sharedClasses.detailsText}>
                    {faq.detail}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Link to="/help/faqs" className={classes.linkButton}>
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
