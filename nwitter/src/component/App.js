import React from 'react';
import { Router } from 'react-router-dom';
import { useState } from 'react';
import AppRouter from 'component/Router';
import { authService } from 'fBase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // 상태 반환
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; 2020 Nwitter</footer>
    </>
  );
}

export default App;
