import React, { memo } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';

import Regulations from '../../../../datas/rulesList';

const Rules = memo(() => {
  return (
    <>
      {Regulations.map((reg) => {
        return (
          <TableContainer
            key={reg._id}
            component={Paper}
            variant="outlined"
            elevation={0}
            sx={{ marginBottom: 3 }}
          >
            <Table sx={{ width: 1 }} aria-label="rules-table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#E3F2FD' }}>
                  <TableCell sx={{ color: '#0D47A1', fontWeight: 'bold' }}>
                    {reg.title}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {reg.rules.map((rule, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{rule}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </>
  );
});

export default Rules;
