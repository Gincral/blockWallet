import React from 'react';
import AppState from './context/background/AppState';
import ConnectWalletButton from './components/connectWalletButton';

const App = () => {
  return (
    <AppState>
      <ConnectWalletButton />
    </AppState>
  );
};

export default App;
