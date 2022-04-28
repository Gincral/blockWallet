import React from 'react';
import AppState from './context/background/AppState';
import AccountInfo from './components/accountInfo';
import Card from './components/card';
import SendEth from './components/sendEth';
import TransactionInfo from './components/transactionInfo';

const App = () => {
  return (
    <AppState>
      <Card>
        <AccountInfo/>
        <SendEth/>
        <TransactionInfo/>
      </Card>
    </AppState>
  );
};

export default App;
