import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

import { getSteps, getStepContent } from '../../../datas/stepsList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.75)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.5)
    }
  },
  label: {
    fontSize: theme.spacing(2.5),
    lineHeight: 1.4
  },
  actionBox: {
    marginBottom: theme.spacing(2)
  },
  actionButton: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  resetBox: {
    padding: theme.spacing(3)
  }
}));

const HowToStepper = () => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.root}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel sx={{ textAlign: 'left' }}>
              <Typography className={classes.label}>{label}</Typography>
            </StepLabel>

            <StepContent>
              <Typography color="textSecondary">
                {getStepContent(index)}
              </Typography>

              <Box className={classes.actionBox}>
                <Box>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    size="small"
                    variant="outlined"
                    aria-label="Back"
                    className={classes.actionButton}
                  >
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    aria-label="Next"
                    onClick={handleNext}
                    className={classes.actionButton}
                    disableElevation
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetBox}>
          <Typography>All steps completed - You&apos;re finished</Typography>

          <Button
            color="primary"
            variant="outlined"
            size="small"
            aria-label="Reset"
            onClick={handleReset}
            className={classes.actionButton}
          >
            Reset
          </Button>
        </Paper>
      )}
    </>
  );
};

export default HowToStepper;
