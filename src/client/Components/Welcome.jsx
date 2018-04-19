import React from 'react';
import { Container, Card, Header, Input, Button, Image } from 'semantic-ui-react';

const Welcome = ({ setView, wallet, updateAddress }) => (
  <Container textAlign="center">
    {/* <Card centered>
      <Icon as="i" name="calculator" size="massive" fitted />
      <Card.Content style={{ textAlign: 'center' }}>
        <Card.Header as="a">
        Gas calculator
        </Card.Header>
        <Card.Meta>
      See estimated GAS generation for n amount of NEO
        </Card.Meta>
      </Card.Content>
    </Card> */}
    <Header as="h2" icon>
      <Image src="/assets/neo-logo.ico" />
      Welcome!
      <Header.Subheader>
        Select wallet to see estimated gas earnings or select calculator to estimate gas earnings for n neo
      </Header.Subheader>
    </Header>


    <Input
        style={{ width: '315px', marginRight: '5px' }}
        size="small"
        type="text"
        value={wallet.newAddress}
        onChange={(e, data) => {
          updateAddress(data.value);
      }}
      />
    <Button onClick={() => setView('wallet')} color="green">Wallet</Button>
    <Button onClick={() => setView('calculator')} color="green">Calculator</Button>
    </Container>


);


export default Welcome;


{ /* /* <Item>
      <Item.Header>
      Welcome!
      </Item.Header>
      <Item.Meta>
        Input address or click calculator for Gas Stats
      </Item.Meta>
    </Item> */ }

