import React from 'react';
import PropTypes from 'prop-types';
import { Item, Container } from 'semantic-ui-react';

const PriceWidget = ({ neoUsd, gasUsd, blockRate }) => (
  <Container style={{ marginTop: '50px' }}>
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src="/assets/neo-logo.ico" />
        <Item.Content>
          <Item.Header as="a">NEO</Item.Header>
          <Item.Meta>{ neoUsd.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }</Item.Meta>
          <Item.Header as="a">GAS</Item.Header>
          <Item.Meta>{ gasUsd.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }</Item.Meta>
          <Item.Header>Avg Block Gen</Item.Header>
          <Item.Meta>{ blockRate } sec</Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>
);

PriceWidget.propTypes = {
  neoUsd: PropTypes.number.isRequired,
  gasUsd: PropTypes.number.isRequired,
  blockRate: PropTypes.number,
};
PriceWidget.defaultProps = {
  blockRate: 20,
};
export default PriceWidget;
