import React from 'react';
import { Container, Header, Input, Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Welcome = ({ setView, wallet, updateAddress }) => (
  <div>
    <Container textAlign="center">
      <Header as="h2" icon>
        <Image src="/assets/neo-logo.ico" />
        Welcome!
        <Header.Subheader>
          Select wallet to see estimated gas earnings or select calculator to estimate gas earnings for n neo
        </Header.Subheader>
      </Header>
    </Container>
    <Container textAlign="center">
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
  </div>
);

Welcome.propTypes = {
  setView: PropTypes.func.isRequired,
  wallet: PropTypes.object.isRequired,
  updateAddress: PropTypes.func.isRequired,
};


export default Welcome;
