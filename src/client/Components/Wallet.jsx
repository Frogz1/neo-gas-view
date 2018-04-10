import React from 'react';
import { Container, Icon, Header } from 'semantic-ui-react';

const Wallet = ({wallet}) => (
  <Container>
  <Header as='h2' icon>
    <Icon name='heartbeat' />
      NEO Address { wallet.address }
      <Header.Subheader>
        Track your gas generation here
      </Header.Subheader>
      </Header>
    <ul> 
    {
      wallet.unspentGas.map(x => (
        <li key={x.value}>{x.value}</li>
      ))
    }
    </ul>
  </Container>
);

export default Wallet;
