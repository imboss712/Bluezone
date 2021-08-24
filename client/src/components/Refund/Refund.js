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
  para: {
    marginTop: theme.spacing(1.5)
  }
}));

const Refund = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Refund Policy | Online BGMI Tournament - Bluezone</title>
        <meta
          name="description"
          content="Our aim and motto is to satisfy the customers. If you are unhappy
            with the services provided, we will refund the money, provided the
            reasons are genuine."
        />
        <link
          rel="canonical"
          href="https://www.bluezone.fun/policy/refund-policy"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Refund Policy | Online BGMI Tournament - Bluezone"
        />
        <meta
          property="og:description"
          content="Our aim and motto is to satisfy the customers. If you are unhappy
            with the services provided, we will refund the money, provided the
            reasons are genuine."
        />
        <meta
          property="og:url"
          content="https://www.bluezone.fun/policy/refund-policy"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Our aim and motto is to satisfy the customers. If you are unhappy
            with the services provided, we will refund the money, provided the
            reasons are genuine."
        />
        <meta
          name="twitter:title"
          content="Refund Policy | Online BGMI Tournament - Bluezone"
        />
      </Helmet>

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />
          <Typography variant="h1" className={classes.heading}>
            Refund Policy
          </Typography>

          <Typography className={classes.para}>
            Our aim and motto is to satisfy the customers. If you are unhappy
            with the services provided, we will refund the money, provided the
            reasons are genuine and proven after investigation.
          </Typography>

          <Typography className={classes.para}>
            In the event of being unsatisfied with our services, customers are
            free to cancel the service and request a refund from us. Our policy
            for cancellation and refund will be as follows:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="If a participant participates in a game/tournament and if he/she exits the team/tournament before the tournament starts then in this case 90% of the amount/ (entry fees) is refundable, and it will be directly credited to the user’s wallet." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="In case we are not able to host the match/game/tournament due to site maintenance or due to technical issues, 100% of the amount/(entry fee) will be refunded in the user's wallet." />
            </ListItem>
          </List>

          <Typography className={classes.para}>NON Refundable:</Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="If the participant participates in a game/tournament and if he/she does not exit the tournament and/or does not play, in this case, no refund is applicable." />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ArrowForwardRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="If a participant enters the game/tournament with a Coupon/Gift amount, in this case, no amount will be refunded to the users." />
            </ListItem>
          </List>

          <Typography className={classes.para} style={{ fontSize: '17px' }}>
            If you have any questions about our refund policy or refund terms,
            you can write your query freely at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:care.bluezone@gmail.com"
            >
              care.bluezone@gmail.com
            </a>
            , we will get back to you as soon as possible.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Refund;
