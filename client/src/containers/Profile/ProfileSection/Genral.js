import React from 'react';
import { format } from 'date-fns';

import TableWrapper from '../ProfileHelper/TableWrapper';
import TableLine from '../ProfileHelper/TableLine';

const Genral = (props) => {
  const {
    user: { name, phone, dob },
    profile: { gameName, gameId, role, favoriteGun }
  } = props;

  return (
    <TableWrapper title="Genral Information">
      <TableLine keyName="Name" valueName={name} />
      <TableLine keyName="Phone" valueName={phone} />
      <TableLine
        keyName="Date of Birth"
        valueName={format(new Date(dob), 'EEE, do MMM yyyy')}
      />
      <TableLine keyName="In Game Name" valueName={gameName} />
      <TableLine keyName="Game Id" valueName={gameId} />
      <TableLine keyName="In Game Role" valueName={role} />
      <TableLine keyName="Favorite Guns" valueName={favoriteGun.join(', ')} />
    </TableWrapper>
  );
};

export default Genral;
