import React from 'react';
import { Input, Container, Header, Image } from 'semantic-ui-react';
import CalculatorContainer from '../Containers/CalculatorContainer';

const NeoInput = ({ updateNeoQuantity, neoQuantity }) => {
  let showCalculator = false;
  return (
    <div>
      <Container textAlign="center">
        <Header as="h2" style={{ padding: '5px' }} icon>
          <Image src="/assets/neo-logo.ico" />
      Input NEO amount
          <Header.Subheader>
      Estimates are based on current block rate and 7 GAS per block reward
          </Header.Subheader>
        </Header>
      </Container>
      <Container textAlign="center">
        <CalculatorContainer style={{ padding: '20px'}} />
        <Input
          style={{ width: '315px', marginRight: '5px', padding: '5px' }}
          size="small"
          type="number"
          onChange={(e, data) => updateNeoQuantity(Number(data.value))}
        />
        {/* <Button
          color="green"
          onClick={() => {
          showCalculator = !showCalculator;
          console.log(showCalculator);
        }}
        >GO
        </Button> */}
        <footer>
          Estimated GAS earnings for {neoQuantity} NEO
        </footer>
      </Container>
    </div>
  );
};

export default NeoInput;
