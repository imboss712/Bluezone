import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

const TermsOfUse = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Terms Of Use | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="Bluezone is owned and operated by the company itself. Bluezone
            shall hereinafter be used to refer to the Bluezone website. Any
            individual User who uses Bluezone will be bound by these Terms and
            Conditions and all other terms that will be set out herein."
        />
        <link
          rel="canonical"
          href="https://www.bluezone.fun/policy/terms-of-use"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Terms Of Use | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="Bluezone is owned and operated by the company itself. Bluezone
            shall hereinafter be used to refer to the Bluezone website. Any
            individual User who uses Bluezone will be bound by these Terms and
            Conditions and all other terms that will be set out herein."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/policy/terms-of-use"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Bluezone is owned and operated by the company itself. Bluezone
            shall hereinafter be used to refer to the Bluezone website. Any
            individual User who uses Bluezone will be bound by these Terms and
            Conditions and all other terms that will be set out herein."
        />
        <meta
          name="twitter:title"
          content="Terms Of Use | Online BGMI Tournament - Bluezone"
        />
      </Helmet>
      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />
          <Typography variant="h1" className={classes.heading}>
            Terms Of Use
          </Typography>

          <Typography className={classes.subheading}>
            <b>Introduction:</b>
          </Typography>

          <Typography className={classes.para}>
            Bluezone is owned and operated by the company itself. "Bluezone"
            shall hereinafter be used to refer to the Bluezone website. Any
            individual "User" who uses Bluezone will be bound by these Terms and
            Conditions and all other terms that will be set out herein.
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Bluezone reserves the right, at its sole discretion, to modify or amend the terms and conditions, terms and regulations, and terms of use of the services provided on Bluezone." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Bluezone provides various 'Tournaments' and 'Services' which may include additional rules and regulations that will appear on the relevant page(s) and apply to Users." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Please visit the website regularly for latest updates." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Services Overview:</b>
          </Typography>

          <Typography className={classes.para}>
            Website (Bluezone) is an online platform where users can create an
            account. There is no fee for opening an account. After creating an
            account, users can access information about various competitions and
            tournaments held in our country (India). The winners of these
            tournaments will be awarded various prizes in the form of money
            and/or in-game items/coins.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Esports, Skill Gaming:</b>
          </Typography>

          <Typography className={classes.para}>
            By using Bluezone, and/or its services; User agrees that the games
            offered by Bluezone are skill games. Winning in these games depends
            on the player's knowledge of the game, experience, team
            coordination, understanding of in-game mechanics, practice, hand-eye
            coordination, real-time strategy, and much more detailed
            understanding which varies from game to game and team to team. User
            agrees that the outcome of any tournament played is only a result of
            skill, not a chance.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Registration:</b>
          </Typography>

          <Typography className={classes.para}>
            It is mandatory to create an account in order to use the services
            provided on the website (Bluezone). A user can create an account on
            the website which will only collect your basic information. To
            create an account, you need your name, your mobile number and your
            date of birth. You must keep your account and registration details
            up-to-date and accurate for communications relating to your
            transactions on the Website. So that the winning amount can be
            credited to your account easily and conveniently.
          </Typography>

          <Typography className={classes.para}>
            At the time of registration or account creation, the Company will
            collect the following personally identifiable information about you:
            name, mobile number, date of birth, address, in-game data, social
            links, and other contact details. The information collected about
            you is subject to the Company's Privacy Policy, which may be read as
            part and parcel of these Terms of Use.
          </Typography>

          <Typography className={classes.para}>
            You are solely responsible for protecting the privacy of your
            account and any activity under the account will be deemed to have
            been performed by you. We reserve the right to permanently
            suspend/block your account if you provide us with false/incorrect
            details or the Company has reasonable grounds to believe that false
            and incorrect information has been provided.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Eligibility:</b>
          </Typography>

          <Typography className={classes.para}>
            The Services on the Website will be available only for select
            geographic regions in India (except in areas that do not allow skill
            gaming). Persons who are "incapable of contract" under the Indian
            Contract Act, 1872, including minors, un-discharged bankrupt, etc.,
            are not eligible to use the website.
          </Typography>

          <Typography className={classes.para}>
            Bluezone is strictly for users who are at least 18 years of age.
            Bluezone reserves the right to terminate or deny your registration,
            or to allow access to the Website If it is found or brought to the
            notice that you are under the age of 18 and or have been playing the
            game for a long time.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Tournament(s), Participation and Prizes:</b>
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="There are a variety of tournaments available on the Bluezone platform for different games (Battlegrounds India only for now). Bluezone grants User(s) a limited use license to participate in such tournaments or use other services provided by Bluezone." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Tournaments in Bluezone, in addition to the Terms of use, rules and regulations mentioned herein, will be governed by the Game Rules specified on the Tournaments page on Bluezone." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="The participation in the tournament is to be done by the users according to their interest and time." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Bluezone reserves the right to change/update the date and/or timing of the Tournament at its sole discretion." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="The winning amount cannot be claimed directly into your UPI/Bank account or mobile wallet, it is only deposited in Bluezone Wallet." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="The prizes awarded in the tournament are for illustrative purposes only. Actual prizes may differ from prizes awarded. Bluezone reserves the right to change the list of prizes at its sole discretion." />
            </ListItem>
          </List>

          <Typography className={classes.subheading}>
            <b>Copyright Notice:</b>
          </Typography>

          <Typography className={classes.para}>
            The Company, its suppliers, and licensors expressly reserve all
            intellectual property rights in all text, programs, services,
            processes, technology, images, contents, and other materials
            displayed on the Website. Access to or use of the Website does not
            confer any license to the intellectual property rights of the
            Company or any third party and should not be construed as granting
            any. All rights in and on the Website, including copyright, are
            owned or licensed by the Company. Any use of the Website or its
            contents, including copying or storing it or them in whole or in
            part, without the permission of the Company is prohibited.
          </Typography>

          <Typography className={classes.para}>
            You may not modify, distribute or repost anything on the Website for
            any purpose whatsoever. The name and logo and all related product
            and service names, design marks and slogans are trademarks/service
            marks of the Company, its affiliates, its partners, or its
            suppliers/service providers. All other marks are the property of
            their respective owners. No trademark or service mark license is
            granted in relation to the material contained on the Website. Access
            to or use of the Website does not authorize anyone to use any name,
            logo or mark in any way whatsoever. References on the Website to any
            names, marks, products or services of third parties or hypertext
            links to third party Websites or information are provided solely as
            a convenience to you and do not in any way constitute or imply the
            Company’s endorsement, sponsorship or recommendation of the third
            party, the information, its services.
          </Typography>

          <Typography className={classes.subheading}>
            <b>Contact Us:</b>
          </Typography>

          <Typography className={classes.para}>
            If you have any questions and doubts about this Agreement,
            Bluezone's practices, or your experience with the Service, you may
            e-mail us at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:care.bluezone@gmail.com"
            >
              care.bluezone@gmail.com
            </a>
            . You can also contact us through{' '}
            <Link to="/about/contact-us">Contact</Link> page or{' '}
            <Link to="/about/feedback">Feedback</Link> page.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default TermsOfUse;
