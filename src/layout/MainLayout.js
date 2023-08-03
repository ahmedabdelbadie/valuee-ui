import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { styled } from '@mui/material/styles';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

const Mainlayout = () => {
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);

  const Main = styled('main')(({ theme }) => ({
    display: 'block',
    flexGrow: 1,
    zIndex: 1000,
    padding: theme.spacing(0, 6, 0, 6),
    boxShadow: theme.spacing(0)
  }));

  return (
    <Box
      sx={[
        {
          display: 'flex',
          transition: `margin-left 2s cubic-bezier(0.42, 0, 0.58, 1)`,
          marginLeft: `-${drawerWidth}px`
        },
        isOpen && {
          transition: `margin-left 2s cubic-bezier(0, 0, 0.2, 1)`,
          marginLeft: 0
        }
      ]}
    >
      <CssBaseline />

      <Sidebar />
      <Main open={isOpen}>
        <Navbar />
        <Suspense fallback="Loading...">
          <div>
            <Outlet />
            <Footer />
          </div>
        </Suspense>
      </Main>
    </Box>
  );
};

export default Mainlayout;
