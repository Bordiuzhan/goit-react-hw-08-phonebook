import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Outlet />
    </div>
  );
};

// styled.div`
//   max-width: 1170px;
//   margin: 0 auto;
//   padding: 16px;
// `;
