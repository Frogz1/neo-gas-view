import React from 'react';
import { Container, Icon, Header, Table, Image } from 'semantic-ui-react';

const Wallet = ({wallet, gasPrice, neoPrice}) => (

  <Container textAlign={'center'}>
  <Header as='h2' icon>
    <Image  src='/assets/neo-logo.ico' />
      NEO Address
      <Header.Subheader>
        { wallet.address }
      </Header.Subheader>
      </Header>
      <Table celled>
        <Table.Header>
         <Table.Row>
           <Table.HeaderCell>NEO</Table.HeaderCell>
           <Table.HeaderCell>USD Value</Table.HeaderCell>
           <Table.HeaderCell>Wallet Value</Table.HeaderCell>
           <Table.HeaderCell>GAS</Table.HeaderCell>
           <Table.HeaderCell>USD Value</Table.HeaderCell>
           <Table.HeaderCell>GAS Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
           <Table.Cell>{ wallet.NEO.balance }</Table.Cell>
           <Table.Cell>{ neoPrice }</Table.Cell>
           <Table.Cell>${ (wallet.NEO.balance * neoPrice).toFixed(2) }</Table.Cell>
           <Table.Cell>{ wallet.GAS.balance }</Table.Cell>
           <Table.Cell>{ gasPrice }</Table.Cell>
           <Table.Cell>${ (wallet.GAS.balance * gasPrice).toFixed(2) }</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </Container>
);

export default Wallet;
