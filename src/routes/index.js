import { useRoutes } from 'react-router-dom';

import { Landing } from '../features/Dashboard/components/Landing';

import { publicRoutes } from './publicRoutes';
import { protectedRoutes } from './protectedRoutes';
import { useUser } from '../lib/auth';
import React from 'react';

export const AppRoutes = () => {
  const user = useUser();

  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = user.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
