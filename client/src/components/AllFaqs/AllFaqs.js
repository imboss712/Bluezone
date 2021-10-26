import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BackButton from '../../ui/BackButton/BackButton';
import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import faqsList from '../../datas/faqsList';
import componentStyle from '../../ui/styles/componentStyle';
import faqStyle from '../../ui/styles/faqStyle';

const AllFaqs = () => {
  const classes = faqStyle();
  const sharedClasses = componentStyle();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <HelmetComponent
        title="FAQs | Online BGMI Tournament - Bluezone"
        description="In the Bluezone FAQ, we have excellent answers to questions asked by users about issues related to our services and tournaments."
        url="https://www.bluezone.fun/help/faq"
        indexBehaviour="index, follow"
      />

      <Box className={classes.root}>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={sharedClasses.heading}>
            FAQs
          </Typography>

          <Box sx={{ margin: '36px 0' }}>
            {faqsList.map((faqSection) => {
              return (
                <Box sx={{ margin: '4px 0 16px 0' }} key={faqSection.id}>
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
                            className={classes.summaryText}
                            color="primary"
                          >
                            {faq.summary}
                          </Typography>
                        </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                          <Typography className={classes.detailsText}>
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
