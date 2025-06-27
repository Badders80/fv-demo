import React, { useEffect, useState } from 'react';
import { useAuth } from '@futureverse/auth-react';

export default function Login() {
  const { authClient } = useAuth();
  const [signInState, setSignInState] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    console.log('authClient methods:', authClient);
    const userStateChange = (user: any) => {
      if (user) setSignInState(true);
      else setSignInState(false);
    };
    authClient.addUserStateListener(userStateChange);
    return () => {
      authClient.removeUserStateListener(userStateChange);
    };
  }, [authClient]);

  if (signInState === true) {
    return <div>Redirecting, please wait...</div>;
  }
  if (signInState === false) {
    return (
      <div>
        <div>Not Authenticated - Please Log In...</div>
        {/* Replace the method below with the correct one after checking the console */}
        <button onClick={() => {/* authClient.[METHOD_NAME]() */}}>Log In</button>
      </div>
    );
  }
  return <div>Authenticating...</div>;
} 