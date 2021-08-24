const sortMatchesByDate = (matches, dateAsc) => {
  return matches.sort((a, b) => {
    if (dateAsc) {
      return a.matchDate - b.matchDate;
    } else {
      return b.matchDate - a.matchDate;
    }
  });
};

const sortMatchesByEntry = (matches, entryAsc) => {
  const entryType = entryAsc ? 1 : -1;

  return matches.sort((a, b) => entryType * (a.entryFees - b.entryFees));
};

export { sortMatchesByDate, sortMatchesByEntry };
