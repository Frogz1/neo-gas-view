import React from 'react';
import { Container, Icon, Header, Table } from 'semantic-ui-react';

const Wallet = ({wallet}) => (

  <Container textAlign={'center'}>
  <Header as='h2' icon>
    <Icon name='heartbeat' />
      NEO Address
      <Header.Subheader>
        { wallet.address }
      </Header.Subheader>
      </Header>
      <Table celled>
        <Table.Header>
         <Table.Row>
           <Table.HeaderCell>NEO</Table.HeaderCell>
           <Table.HeaderCell>Unspent NEO</Table.HeaderCell>
           <Table.HeaderCell>GAS</Table.HeaderCell>
           <Table.HeaderCell>Unspent GAS</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
           <Table.Cell>{ wallet.NEO.balance }</Table.Cell>
           <Table.Cell>{ wallet.unspentNEO }</Table.Cell>
           <Table.Cell>{ wallet.GAS.balance }</Table.Cell>
           <Table.Cell>{ wallet.unspentGas }</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </Container>
);

export default Wallet;
