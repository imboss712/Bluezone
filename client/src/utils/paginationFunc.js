const currentPageMatches = (matches, offset) => {
  const startIndex = offset * 10;
  const EndIndex = startIndex + 10;

  return matches.slice(startIndex, EndIndex).map((match) => match);
};

export default currentPageMatches;
