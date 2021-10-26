import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SuspenseLoading = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      <Typography color="primary">Loading...</Typography>
    </Box>
  );
};

export default SuspenseLoading;
