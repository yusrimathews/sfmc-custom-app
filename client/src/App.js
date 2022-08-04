import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthRoute } from './auth';

import BackdoorRoute from './routes/backdoor';
import PublicRoute from './routes/public';
import ProtectedRoute from './routes/protected';
import NotFoundRoute from './routes/404';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/backdoor" element={<BackdoorRoute />} />
        <Route path="/" element={<PublicRoute />} />

        <Route
          path="/protected"
          element={
            <AuthRoute>
              <ProtectedRoute />
            </AuthRoute>
          }
        />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
