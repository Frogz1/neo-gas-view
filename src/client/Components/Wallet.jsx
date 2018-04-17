import React from 'react';
import { Container, Icon, Header, Table, Image } from 'semantic-ui-react';

const Wallet = ({wallet, gasUsd, neoUsd}) => (

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
           {/* <Table.HeaderCell>USD Value</Table.HeaderCell> */}
           <Table.HeaderCell>NEO Value</Table.HeaderCell>
           <Table.HeaderCell>GAS</Table.HeaderCell>
           <Table.HeaderCell>Unclaimed GAS</Table.HeaderCell>
           <Table.HeaderCell>Total GAS</Table.HeaderCell>
           {/* <Table.HeaderCell>USD Value</Table.HeaderCell> */}
           <Table.HeaderCell>GAS Value</Table.HeaderCell>
           <Table.HeaderCell>Combined Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
           <Table.Cell>{ wallet.NEO }</Table.Cell>
           {/* <Table.Cell>{ neoPrice }</Table.Cell> */}
           <Table.Cell>${ (wallet.NEO * neoUsd).toFixed(2) }</Table.Cell>
           <Table.Cell>{ Number(wallet.GAS).toFixed(4) }</Table.Cell>
           <Table.Cell>{ Number(wallet.unclaimedGas).toFixed(4) }</Table.Cell>
           <Table.Cell>{ Number(wallet.GAS + wallet.unclaimedGas).toFixed(4) }</Table.Cell>
           <Table.Cell>${ ((wallet.GAS + wallet.unclaimedGas ) * gasUsd).toFixed(2) }</Table.Cell>
           <Table.Cell>${ (((wallet.GAS + wallet.unclaimedGas ) * gasUsd) + (wallet.NEO * neoUsd)).toFixed(2) }</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </Container>
);

export default Wallet;
