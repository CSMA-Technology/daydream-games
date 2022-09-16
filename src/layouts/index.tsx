import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import { daydreamTheme } from '../themes';
import CssWrapper from '../components/CssWrapper';

type Props = {
  children: React.ReactNode
};

const theme = createTheme(daydreamTheme);

const Layout = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssWrapper>
      <Header />
      <Box sx={{
        paddingTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        {children}
      </Box>
    </CssWrapper>
  </ThemeProvider>
);

export default Layout;
