import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Dashboard from './dashboard'
import Ticker from './ticker'
import OrderBook from './orderbook'
import Transaction from './transaction'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Dashboard} /> */}
        <Route path="/ticker" component={Ticker} />
        <Route path="/orderbook" component={OrderBook} />
        <Route path="/transaction" component={Transaction} />
      </Switch>
    </div>
  );
}

export default App;
