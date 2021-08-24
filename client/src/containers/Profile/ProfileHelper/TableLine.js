import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const TableLine = (props) => {
  const { keyName, valueName } = props;

  return (
    <TableRow>
      <TableCell>{keyName}</TableCell>
      <TableCell align="right" style={{ color: '#0d47a1' }}>
        {valueName}
      </TableCell>
    </TableRow>
  );
};

export default TableLine;
