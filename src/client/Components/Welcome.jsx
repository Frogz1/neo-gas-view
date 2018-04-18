import React from 'react';
import { Container, Card, Header, Icon, Button, Image } from 'semantic-ui-react';

const Welcome = props => (
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
    <Header  as="h2" icon>
      <Image src="/assets/neo-logo.ico" />
      Welcome!
      <Header.Subheader>
        Select wallet to see estimated gas earnings or select calculator to estimate gas earnings for n neo
      </Header.Subheader>
    </Header>
    <div>
      <Button color="green">Wallet</Button>
      <Button color="green">Calculator</Button>
    </div>
    {/* <Card centered>
      <Image src="/assets/neo_raw.png" />
      <Card.Content style={{ textAlign: 'center' }}>
        <Card.Header as="a">
        Check your wallet
        </Card.Header>
        <Card.Meta>
      See estimated GAS generation based on your wallet, or use the calucator to estimate gas earning for n NEO
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Container>
         
        </Container>
      </Card.Content>
    </Card> */}
  </Container>
);


export default Welcome;


/* <Item>
      <Item.Header>
      Welcome!
      </Item.Header>
      <Item.Meta>
        Input address or click calculator for Gas Stats
      </Item.Meta>
    </Item>
    */
