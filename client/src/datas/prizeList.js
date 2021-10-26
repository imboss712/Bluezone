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

const positionPrizeList = (teamType, entryFees) => {
  let prizeList;

  if (teamType === 'Solo') {
    const totalAmount = 100 * entryFees * 0.5;
    prizeList = getPrizeList(10, totalAmount, entryFees, 1);
  } else if (teamType === 'Duo') {
    const totalAmount = 100 * entryFees * 0.55;
    prizeList = getPrizeList(5, totalAmount, entryFees, 2);
  } else if (teamType === 'Squad') {
    const totalAmount = 100 * entryFees * 0.6;
    prizeList = getPrizeList(6, totalAmount, entryFees, 4);
  }

  return prizeList;
};

export default positionPrizeList;
