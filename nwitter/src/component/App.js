import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { useState } from 'react';
import AppRouter from 'component/Router';
import { authService } from 'fBase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 상태 반환
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing..'}
      <footer>&copy; 2020 Nwitter</footer>
    </>
  );
}

export default App;
