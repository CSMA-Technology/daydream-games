import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import Header from '../components/Header';

type Props = {
  children: React.ReactNode
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Box sx={{
      paddingTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      {children}
    </Box>
  </>
);

export default Layout;
