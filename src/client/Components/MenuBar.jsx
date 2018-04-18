import React, { Component } from 'react';
import { Input, Menu, Segment, Item, Container } from 'semantic-ui-react';

const MenuBar = ({ neoUsd, gasUsd, blockRate }) => (
  <Menu style={{ textAlign: 'center' }}>
    <Container>
      <Menu.Item name="wallet" as="a" />
      <Menu.Item name="calculator" as="a" />
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

export default MenuBar;
