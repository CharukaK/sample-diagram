import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
import { Home } from './components/Home';

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
