import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box style={{ maxWidth: 960, margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
