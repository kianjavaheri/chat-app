import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

import SignIn from './components/SignIn';
import Chat from './components/Chat';

function App() {
  const [user] = useAuthState(auth as any)
  return (
    <>
    {user ? <Chat /> : <SignIn/>}
    </>
  );
}

export default App;
