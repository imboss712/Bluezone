import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const getSteps = () => {
  return [
    'Create An Account',
    'Complete Your Profile',
    'Join A Tournament',
    'Play Game',
    'Earn Real Money'
  ];
};

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return 'First, create an account on Bluezone by providing some personal information.';
    case 1:
      return 'Complete your profile on Bluezone by filling in BGMI stats, details about your interests, address and your social media links.';
    case 2:
      return 'Joining the tournament is the most important step. So choose a Solo, Duo, or Squad tournament and pay the entry fee and you are done.';
    case 3:
      return 'Join the tournament and show your gaming skills, dedication to score well in the tournament. Be sure to take a screenshot of the tournament result.';
    case 4:
      return 'Winnings will be credited directly to your Bluezone Wallet within one hour of the completion of the tournament. You can withdraw your winnings to your bank account, wallet or UPI instantly.';
    default:
      return 'Unknown step';
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2.75)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.5)
    }
  },
  label: {
    fontSize: theme.spacing(2.5),
    lineHeight: 1.4
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
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
            <StepLabel style={{ textAlign: 'left' }}>
              <Typography className={classes.label}>{label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography color="textSecondary">
                {getStepContent(index)}
              </Typography>
              <Box className={classes.actionsContainer}>
                <Box>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    size="small"
                    variant="outlined"
                    aria-label="Back"
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    aria-label="Next"
                    onClick={handleNext}
                    className={classes.button}
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
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - You&apos;re finished</Typography>
          <Button
            color="primary"
            variant="outlined"
            size="small"
            aria-label="Reset"
            onClick={handleReset}
            className={classes.button}
          >
            Reset
          </Button>
        </Paper>
      )}
    </>
  );
};

export default HowToStepper;
