import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import HelmetComponent from '../../ui/HelmetComponent/HelmetComponent';
import BackButton from '../../ui/BackButton/BackButton';
import componentStyle from '../../ui/styles/componentStyle';

const Refund = () => {
  const classes = componentStyle();

  return (
    <>
      <HelmetComponent
        title="Refund Policy | Online BGMI Tournament - Bluezone"
        description="Our aim and motto is to satisfy the customers. If you are unhappy with the services provided, we will refund the money, provided the reasons are genuine."
        url="https://www.bluezone.fun/policy/refund-policy"
        indexBehaviour="index, follow"
      />

      <Box>
        <Container>
          <BackButton link="/" text="Back To Home" />

          <Typography variant="h1" className={classes.heading}>
            Refund Policy
          </Typography>

          <Typography className={classes.text}>
            Our aim and motto is to satisfy the customers. If you are unhappy
            with the services provided, we will refund the money, provided the
            reasons are genuine and proven after investigation.
          </Typography>

          <Typography className={classes.text}>
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

          <Typography className={classes.text}>NON Refundable:</Typography>

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

          <Typography className={classes.text} sx={{ fontSize: 17 }}>
            If you have any questions about our refund policy or refund terms,
            you can write your query freely at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:care.bluezone@gmail.com"
              style={{ color: '#1976D2' }}
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
