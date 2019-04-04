import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const UserDetails = React.lazy(() => import('./views/UserDetails'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/user-details', name: 'User Details', component: UserDetails }
];

export default routes;
