import React, { Component } from 'react';
import { Input, Menu, Segment, MenuItem, Container } from 'semantic-ui-react';

const MenuBar = props => (
  <Menu textAlign="center">
    <Container>
      <Menu.Item name="wallet" as="a" />
      <Menu.Item name="calculator" as="a" />
      <Menu.Item>
        <Input icon="search" placeholder="Enter Address..." />
      </Menu.Item>
    </Container>
  </Menu>
);

export default MenuBar;
