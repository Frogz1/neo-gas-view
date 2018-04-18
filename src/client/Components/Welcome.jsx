import React from 'react';
import { Container, Card, Item } from 'semantic-ui-react';

const Welcome = props => (
  <Container>
    <Item>
      <Item.Header>
      Welcome!
      </Item.Header>
      <Item.Meta>
        Input address or click calculator for Gas Stats
      </Item.Meta>
    </Item>
  </Container>
);


export default Welcome;
