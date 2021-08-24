import React from 'react';
import TableWrapper from '../ProfileHelper/TableWrapper';
import TableLine from '../ProfileHelper/TableLine';

const ProfileAddress = (props) => {
  const {
    address: { city, district, state, pincode }
  } = props;

  return (
    <TableWrapper title="Address">
      <TableLine keyName="City" valueName={city} />
      <TableLine keyName="District" valueName={district} />
      <TableLine keyName="State" valueName={state} />
      <TableLine keyName="Pin Code" valueName={pincode} />
    </TableWrapper>
  );
};

export default ProfileAddress;
