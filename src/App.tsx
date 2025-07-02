import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FutureverseAuthProvider } from '@futureverse/auth-react';
import { FutureverseAuthClient } from '@futureverse/auth-react/auth';
import Login from './Login';

const authClient = new FutureverseAuthClient({
  // 1. Update your Client ID with the new one
  clientId: 'Ug3k_XbN1wXZlPDvgK_Ge',
  
  // 2. Keep the environment as staging
  environment: 'staging',

  // These are correct for local testing
  redirectUri: 'http://localhost:5173/',
  postLogoutRedirectUri: 'http://localhost:5173/',
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FutureverseAuthProvider authClient={authClient}>
        <Login />
      </FutureverseAuthProvider>
    </QueryClientProvider>
  );
}