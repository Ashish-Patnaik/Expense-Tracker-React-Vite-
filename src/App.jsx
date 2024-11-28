import { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';  // Correct import
import Header from './components/Header';
import Balance from './components/Balance';
import Incomexp from './components/Incomexp';
import Trans from './components/Trans';
import Add from './components/Add';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <Incomexp />
          <Trans />
          <Add />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
