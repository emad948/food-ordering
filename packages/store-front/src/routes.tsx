import React from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import Dashboard from './views/dashboard/dashboard';
import LandingPage from './views/landing-page';

const Routes: React.FC = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<LandingPage />} />

    <Route path="dashboard" element={<Dashboard />} />

    <Route path="*" element={<Navigate to="/" replace />} />
  </ReactRouterRoutes>
);

export default Routes;
