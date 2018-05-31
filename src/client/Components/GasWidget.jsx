import React from 'react';
import { Item } from 'semantic-ui-react';

const GasWidget = props => (
  <Item.Group style={{ float: 'right' }}>
    <Item>
      <Item.Content>
        <Item.Header as="a">Gas Generation</Item.Header>
        <Item.Meta>0.0008 Per day</Item.Meta>
        <Item.Description>
          <ul>
            <li>hi</li>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default GasWidget;
