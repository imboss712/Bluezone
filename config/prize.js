const getPrizeList = (totalWinners, totalAmount, entryFees, teamFactor) => {
  const positionPrizeList = [];

  totalAmount -= totalWinners * entryFees * teamFactor;
  const temp = (totalWinners * (totalWinners + 1)) / 2;

  let i = 1;
  while (i <= totalWinners) {
    const winingPrize =
      entryFees * teamFactor +
      Math.floor(totalAmount / temp) * (totalWinners - i + 1);

    positionPrizeList.push({ position: i, prize: winingPrize });

    i += 1;
  }

  return positionPrizeList;
};

const getSoloWinnerCount = (teams) => {
  let count;

  if (teams <= 100 && teams > 80) {
    count = 10;
  } else if (teams <= 80 && teams > 60) {
    count = 8;
  } else if (teams <= 60 && teams > 40) {
    count = 6;
  } else if (teams <= 40 && teams > 25) {
    count = 4;
  } else if (teams <= 25 && teams >= 15) {
    count = 3;
  }

  return count;
};

const getDuoWinnerCount = (teams) => {
  let count;

  if (teams <= 50 && teams > 40) {
    count = 5;
  } else if (teams <= 40 && teams > 30) {
    count = 4;
  } else if (teams <= 30 && teams > 15) {
    count = 3;
  }

  return count;
};

const getSquadWinnerCount = (teams) => {
  let count;

  if (teams <= 25 && teams > 20) {
    count = 6;
  } else if (teams <= 20 && teams > 15) {
    count = 4;
  } else if (teams <= 15 && teams > 10) {
    count = 3;
  }
  return count;
};

const positionPrizeList = (teamType, teams, participants, entryFees) => {
  let prizeList;

  if (teamType === 'Solo') {
    const totalAmount = participants * entryFees * 0.5;
    const totalWinners = getSoloWinnerCount(teams);

    prizeList = getPrizeList(totalWinners, totalAmount, entryFees, 1);
  } else if (teamType === 'Duo') {
    const totalAmount = participants * entryFees * 0.55;
    const totalWinners = getDuoWinnerCount(teams);

    prizeList = getPrizeList(totalWinners, totalAmount, entryFees, 2);
  } else if (teamType === 'Squad') {
    const totalAmount = participants * entryFees * 0.6;
    const totalWinners = getSquadWinnerCount(teams);

    prizeList = getPrizeList(totalWinners, totalAmount, entryFees, 4);
  }

  return prizeList;
};

const killPrize = (kills, entryFees) => {
  return kills * entryFees * 0.2;
};

module.exports = { positionPrizeList, killPrize };
