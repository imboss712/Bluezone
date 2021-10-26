import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles';
import Box from '@mui/material/Box';

import ScrollToTop from './ScrollToTop';
import Routes from './Routes/routes';

const theme = createTheme();

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ScrollToTop />
            <Box className="App">
              <Routes />
            </Box>
          </ThemeProvider>
        </StyledEngineProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
