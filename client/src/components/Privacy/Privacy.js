import React from 'react';
import { Helmet } from 'react-helmet-async';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from '../BackButton/BackButton';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.spacing(4),
    lineHeight: 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: theme.spacing(1.5, 0)
  },
  subheading: {
    marginTop: theme.spacing(1.75)
  },
  para: {
    marginTop: theme.spacing(1.5)
  }
}));

const Privacy = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="We, Bluezone, the creators of this Privacy Policy, ensure our firm
            commitment to your privacy while protecting your valuable
            information. In order to provide you with our uninterrupted use of
            the services, we may collect and disclose information about you in
            certain circumstances."
        />
        <link rel="canonical" href="https://www.bluezone.fun/policy/privacy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Privacy Policy | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="We, Bluezone, the creators of this Privacy Policy, ensure our firm
            commitment to your privacy while protecting your valuable
            information. In order to provide you with our uninterrupted use of
            the services, we may collect and disclose information about you in
            certain circumstances."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/policy/privacy"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="We, Bluezone, the creators of this Privacy Policy, ensure our firm
            commitment to your privacy while protecting your valuable
            information. In order to provide you with our uninterrupted use of
            the services, we may collect and disclose information about you in
            certain circumstances."
        />
        <meta
          name="twitter:title"
          content="Privacy Policy | Online BGMI Tournament - Bluezone"
        />
      </Helmet>

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />
          <Typography variant="h1" className={classes.heading}>
            Privacy Policy
          </Typography>

          <Typography className={classes.para}>
            We, Bluezone, the creators of this Privacy Policy, ensure our firm
            commitment to your privacy while protecting your valuable
            information. In order to provide you with our uninterrupted use of
            the services, we may collect and disclose information about you in
            certain circumstances. We provide this notice explaining our
            information practices and the choices you can make about how we
            collect and use your information in order to better protect your
            privacy.
          </Typography>

          <Typography className={classes.para}>
            All visitors to Bluezone (website) are advised to carefully read and
            understand our Privacy Policy, as by accessing the Website, you
            agree to be bound by the terms and conditions of the Privacy Policy
            and consent to the collection, storage and use of the information
            provided herein.
          </Typography>

          <Typography className={classes.para}>
            If you do not agree to the terms and conditions of our Privacy
            Policy, including how your information is collected or used, please
            do not access or use the Site.
          </Typography>

          <Typography className={classes.para}>
            If you have any questions or concerns regarding this Privacy Policy,
            you should contact us at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:care.bluezone@gmail.com"
            >
              care.bluezone@gmail.com
            </a>
          </Typography>

          <Typography className={classes.subheading}>
            <b>Definitions:</b>
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="“We”, “Our”, and “Us” shall mean and refer to the creators of this Privacy Policy." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="“You”, “Your”, “Yourself” and “User” shall mean and refer to natural and legal individuals who use the Website." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="“Website” shall mean and refer to Bluezone created by the Company." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="“Personal Information” means and refers to any personally identifiable information that we may collect from you during the registration process." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="“Third Party” refers to any website, company, or person other than the user and the creator of the website." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Information We Collect:</b>
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="When you register for an account with us, we collect your personally identifiable information, such as your name, date of birth, phone number, address, in-game data and social links." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="In order to pay your withdrawals, for now, we do not collect your Bank/UPI and PAN details as we pay through the Payout Link. But in the future, we will ask you for your Bank/UPI and PAN details." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Use of Information Collected:</b>
          </Typography>

          <Typography className={classes.para}>
            We use your personal and demographic information to:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Enhance your experience on Bluezone." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Resolve queries, troubleshoot problems and promote safe and secure service." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Allow you to receive quality customer service." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact information like phone number can be used to send notifications to users via SMS and WhatsApp notification. The above information will be used to provide better communication in the tournaments the player has participated in and to inform them of updates to their games." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Sharing of Personal Information:</b>
          </Typography>

          <Typography className={classes.para}>
            At the very outset, we never reveal or share your personal
            information unless inevitable. We may disclose it when (only if it
            is absolutely necessary). We give permission to third parties,
            including service providers which process personal information on
            behalf of us to provide customer support and to manage our
            community. Examples of these third parties include:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="third party program restriction providers to block cheating tools and unauthorized programs." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="cloud computing service providers to provide cloud storage services." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="third party payment service providers (like Razorpay etc.) to assist with payment for transactions or providing withdrawing service for users." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="third party messaging providers (like Twilio etc.) for better communication and to notify you of tournaments you are participating in." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="customer service providers to respond to users’s inquiries." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Our Policy Concerning Underage Users:</b>
          </Typography>

          <Typography className={classes.para}>
            Bluezone is strictly for users who are at least 18 years of age. If
            you are a parent or guardian and you believe your child under 18
            years of age has provided us with their personal information, you
            can contact us and request that your child’s information be deleted
            from our system.
          </Typography>

          <Typography className={classes.subheading}>
            <b>External Links:</b>
          </Typography>

          <Typography className={classes.para}>
            The Website may include hyperlinks to other web sites or content or
            resources or gaming links. We have no control over any websites or
            resources that are provided by companies or individuals other than
            us.
          </Typography>

          <Typography className={classes.para}>
            You acknowledge and agree that we are not responsible for the
            availability of any such external sites or resources, and does not
            endorse any advertising, product or other material available on or
            available on such websites or resources.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Security:</b>
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="At Bluezone, we go miles to protect your identity and information. We follow industry best practices to ensure that your valuable information is not lost, misused, accessed, disclosed, altered or destroyed." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Your transactions on Bluezone are also secure. You can learn more about security by doing a Razorpay security search on Google." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Update and Changes:</b>
          </Typography>

          <Typography className={classes.para}>
            Our Privacy Policy covers almost every concern a potential/existing
            user may raise. The Privacy Policy is subject to change at any time
            and such changes will be updated on this page. The use of the
            information we collect is subject to the privacy policy in force at
            the time such information is collected. Users are requested to stay
            updated on this page for the latest updates.
          </Typography>

          <br />
          <br />

          <Typography className={classes.para}>
            If you have any questions, feel free to contact us at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:care.bluezone@gmail.com"
            >
              care.bluezone@gmail.com
            </a>{' '}
            and we will try to address your concerns and issues.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Privacy;
