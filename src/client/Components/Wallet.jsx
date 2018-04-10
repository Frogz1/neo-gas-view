import React from 'react';

const Wallet = ({wallet}) => (
  <ul> 
  {
    wallet.unspentGas.map(x => (
      <li key={x.value}>{x.value}</li>
    ))
  }
  </ul>
);

export default Wallet;
