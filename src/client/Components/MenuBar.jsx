import React from 'react';
import { Input, Menu, Item, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MenuBar = ({
  neoUsd, gasUsd, blockRate, setView,
}) => (
  <Menu style={{ textAlign: 'center' }} stackable>
    <Container>
      <Menu.Item name="wallet" as="a" onClick={() => setView('wallet')} />
      <Menu.Item name="calculator" as="a" onClick={() => setView('calculator')} />
      <Menu.Item>
        <Input icon="search" placeholder="Enter Address..." />
      </Menu.Item>
    </Container>
    <Menu.Item name="neo">
      <Item.Image size="mini" src="/assets/neo-logo.ico" />
      NEO: ${neoUsd}
    </Menu.Item>
    <Menu.Item name="neo">
    GAS: ${gasUsd}
    </Menu.Item>
    <Menu.Item name="neo">
    Block Gen: {blockRate} sec
    </Menu.Item>
  </Menu>
);

MenuBar.propTypes = {
  neoUsd: PropTypes.number.isRequired,
  gasUsd: PropTypes.number.isRequired,
  blockRate: PropTypes.number,
  setView: PropTypes.func.isRequired,
};
MenuBar.defaultProps = {
  blockRate: 20,
};
export default MenuBar;
