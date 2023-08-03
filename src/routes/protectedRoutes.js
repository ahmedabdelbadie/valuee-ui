import { Navigate } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { lazyImport } from '../utils/lazyImport';

const { Dashboard } = lazyImport(
  () => import('../features/Dashboard/components/Dashboard'),
  'Dashboard'
);
const { GLRoutes } = lazyImport(() => import('../features/general-ledger'), 'GLRoutes');

const { OrganizationRoutes } = lazyImport(
  () => import('../features/Organization'),
  'OrganizationRoutes'
);

const App = () => {
  const theme = useTheme();
  const MainContainer = styled(Box)({
    minHeight: '100vh',
    '&::before': {
      width: '100%',
      height: '264px',
      position: 'absolute',
      top: '0',
      left: '0',
      background:
        theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      content: "''",
      zIndex: 0
    }
  });

  return (
    <MainContainer>
      <MainLayout />
    </MainContainer>
  );
};

export const protectedRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/general-ledger/*', element: <GLRoutes /> },
      { path: '/organization/*', element: <OrganizationRoutes /> },
      { path: '/', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> }
    ]
  }
];
