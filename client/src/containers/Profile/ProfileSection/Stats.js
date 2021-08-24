import React from 'react';
import TableWrapper from '../ProfileHelper/TableWrapper';
import TableLine from '../ProfileHelper/TableLine';

const Stats = (props) => {
  const {
    stats: {
      server,
      favoriteMap,
      season,
      perspective,
      teamType,
      rpValue,
      kdValue,
      tierValue
    }
  } = props;

  return (
    <TableWrapper title="Game Statistics">
      <TableLine keyName="Server" valueName={server} />
      <TableLine keyName="Season" valueName={season} />
      <TableLine keyName="Royale Pass" valueName={rpValue} />
      <TableLine keyName="Team Type" valueName={teamType} />
      <TableLine keyName="Perspective" valueName={perspective} />
      <TableLine keyName="FD Ratio" valueName={kdValue} />
      <TableLine keyName="Tier" valueName={tierValue} />
      <TableLine keyName="Favorite Map" valueName={favoriteMap} />
    </TableWrapper>
  );
};

export default Stats;
