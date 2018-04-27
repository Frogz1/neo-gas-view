import React from 'react';
import { Input, Menu, Item, Container, Icon, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const MenuBar = ({
  neoUsd, gasUsd, blockRate, setView,
}) => (

  <Menu style={{ textAlign: 'center' }} stackable>
    <Container>
      {/* <Menu.Item name="github" as="a" href="http://www.github.com/Frogz1">
        <Icon name="github" />
      </Menu.Item>
      <Menu.Item name="twitter" as="a" href="http://www.twitter.com/redharp_">
        <Icon name="twitter" />
      </Menu.Item> */}
      <Menu.Item name="wallet" as="a" onClick={() => setView('wallet')} />
      <Menu.Item name="calculator" as="a" onClick={() => setView('calculator')} />
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
