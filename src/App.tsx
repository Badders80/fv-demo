import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FutureverseAuthProvider } from '@futureverse/auth-react';
import { FutureverseAuthClient } from '@futureverse/auth-react/auth';

const authClient = new FutureverseAuthClient({
  clientId: '-cqrPZVIgscdp_pvfoCdq',
  environment: 'development',
  redirectUri: 'http://localhost:5173/',
  postLogoutRedirectUri: 'http://localhost:5173/',
});
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FutureverseAuthProvider authClient={authClient}>
        <Router>
          <Routes>
            {/* Add your routes here if needed */}
          </Routes>
        </Router>
      </FutureverseAuthProvider>
    </QueryClientProvider>
  );
}
