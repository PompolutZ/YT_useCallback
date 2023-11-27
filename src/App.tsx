import { useEffect, useState } from 'react';
import { User } from './types';
import { useAuth } from './useAuth';

export function App() {
  const { login, logout, isOnline, fetchUserDetails } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  useEffect(() => {
    if (isOnline && !currentUser) {
      fetchUserDetails().then((user) => {
        console.log("Fetching user...");
        setCurrentUser(user);
      });
    }
  }, [isOnline]);

  return (
    <div>
      <div>{currentUser?.username ?? ''}</div>
      <div>{isOnline ? '🟢 online' : '🔴 offline'}</div>
      <button onClick={() => (isOnline ? logout() : login())}>
        {isOnline ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
