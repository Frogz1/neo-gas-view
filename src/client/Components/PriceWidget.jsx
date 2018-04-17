import React from 'react';
import { Image, Item, Container } from 'semantic-ui-react';

const PriceWidget = ({neoUsd, gasUsd, blockRate}) => (
  <Container style={{marginTop: '50px'}}>
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/assets/neo-logo.ico' />
      <Item.Content>
        <Item.Header as='a'>NEO</Item.Header>
        <Item.Meta>${ neoUsd }</Item.Meta>
        <Item.Header as='a'>GAS</Item.Header>
        <Item.Meta>${ gasUsd }</Item.Meta>
        <Item.Header>Avg Block Gen</Item.Header>
        <Item.Meta>{ blockRate } sec</Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>    
  </Container>
);

export default PriceWidget;